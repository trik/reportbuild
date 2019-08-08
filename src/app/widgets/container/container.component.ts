import { Component, Input, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { Widget, WT } from '../report.interface';
import { WidgetComponent } from '../widget/widget.component';

// ContainerComponent is used to render widgets of type:
// header, content, footer, layout, column.
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends WidgetComponent {

  readonly WT = WT;
  readonly widgetName = ['Layout', 'Page Break', 'Image', 'Text',
    'Chart', 'Table', 'Map', 'Column', 'Formula', 'Image Container'];

  @Input() name: string;
  @Input() widgetSet: WT[];

  constructor(
    @Optional() public builder: ReportBuilderComponent,
    @Optional() public parent: WidgetComponent
  ) {
    super(builder, parent);
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
    const widget = this.widget as Widget;
    if (!widget.content) {
      widget.content = [];
    }
    if (wt === WT.Layout) {
      widget.content.push({
        widgetType: WT.Layout,
        content: [{widgetType: WT.Column}, {widgetType: WT.Column}]
      });
    } else {
      widget.content.push({widgetType: wt});
    }
  }

}
