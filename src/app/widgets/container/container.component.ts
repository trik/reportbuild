import { Component, Input, Optional, ViewEncapsulation } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { WT, WidgetContainer, Layout } from '../report.interface';
import { WidgetComponent } from '../widget/widget.component';

// ContainerComponent is used to render widgets of type WidgetContainer.
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent extends WidgetComponent {

  readonly WT = WT;
  readonly widgetName = ['Layout', 'Page Break', 'Image', 'Text',
    'Chart', 'Table', 'Map', 'Column', 'Formula', 'Image Container'];

  @Input() name: string;
  @Input() widgetSet: WT[];

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  columnIndex(): number {
    const layout = this.parent as Layout;
    if (!layout) {
      throw new Error('columnIndex called on widget that is not a child of layout.');
    }
    return layout.content.indexOf(this.widget);
  }

  columnWidth(): number {
    return (this.parent as Layout).columns[this.columnIndex()];
  }

  onColumnWidthChange(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    if (val === '') {
      val = '-1';
    }
    let width = Number(val);
    if (isNaN(width)) {
      width = -1;
    }
    (this.parent as Layout).columns[this.columnIndex()] = width;
  }

  addWidgetClicked(event: Event) {
    const select = event.srcElement as HTMLSelectElement;
    const wt = Number(select.value);
    if (wt < 0) {
      return;
    }
    this.addWidget(wt);
    select.value = '-1';
  }

  addWidget(wt: WT) {
    const container = this.widget as WidgetContainer;
    if (!container.content) {
      container.content = [];
    }
    const newWidget: any = {widgetType: wt};
    switch (wt) {
    case WT.Layout:
      newWidget.columns = [-1, -1];
      newWidget.content = [{widgetType: WT.Column}, {widgetType: WT.Column}];
      break;
    case WT.Text:
      newWidget.htmlText = '';
      break;
    case WT.Column:
      (container as Layout).columns.push(-1);
      break;
    }
    container.content.push(newWidget);
  }

}
