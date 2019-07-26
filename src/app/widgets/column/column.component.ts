import { Component, ViewChild } from '@angular/core';

import { WidgetType, Widget } from '../widget.interface';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

  @ViewChild('content') content: Widget;

  constructor() { }

  toObject(): any {
    return {
      widgetType: WidgetType.Column,
      content: this.content.toObject(),
    };
  }

}
