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
  readonly widgetName = ['Layout', 'Page Break', 'Image', 'Text',
    'Chart', 'Table', 'Map', 'Column', 'Formula', 'Image Container'];

  @Input() name: string;
  @Input() widget: Widget;
  @Input() widgetSet: WT[];

  constructor(@Optional() public builder: ReportBuilderComponent) { }

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
