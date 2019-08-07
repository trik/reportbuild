import { Component, Input, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { Widget, WT } from '../report.interface';

// ContainerComponent is used to render widgets of type:
// header, content, footer, layout, column.
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  readonly WT = WT;

  @Input() name: string;
  @Input() widget: Widget;
  @Input() widgetSet: WT[];

  constructor(@Optional() public builder: ReportBuilderComponent) { }

  /*widgetSet(widgetName: string): string[] {
    switch (widgetName) {
    case 'layout':
      return []; // columns can be added to layout, but we use a specialized path
    case 'column':
      return ['layout', 'image', 'text', 'chart', 'table', 'map', 'image container'];
    case 'header':
    case 'footer':
      return ['layout', 'image', 'text', 'image container'];
    case 'content':
      return Object.keys(widgetTypeOf).filter(w => w !== 'column' && w !== 'formula');
    default:
      return [];
    }
  }*/

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
    if (!this.widget.content) {
      this.widget.content = [];
    }
    if (wt === WT.Layout) {
      this.widget.content.push({
        widgetType: WT.Layout,
        content: [{widgetType: WT.Column}, {widgetType: WT.Column}]
      });
    } else {
      this.widget.content.push({widgetType: wt});
    }
  }

}
