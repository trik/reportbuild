import { Component, ViewChild, Optional } from '@angular/core';

import { WidgetType, Widget } from '../widget.interface';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

  @ViewChild('content') content: Widget;

  constructor(@Optional() public builder: ReportBuilderComponent) { }

  toObject(): any {
    return {
      widgetType: WidgetType.Column,
      content: this.content.toObject(),
    };
  }

}
