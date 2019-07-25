import { Component, Output, EventEmitter } from '@angular/core';

import { WidgetType } from '../widget.interface';

@Component({
  selector: 'app-add-widget-button',
  templateUrl: './add-widget-button.component.html',
  styleUrls: ['./add-widget-button.component.scss']
})
export class AddWidgetButtonComponent {

  @Output() widgetSelected = new EventEmitter<number>();

  constructor() { }

  onWidgetSelected(event: any) {
    const select = event.srcElement;
    const wid = Number(select.value);
    if (0 <= wid && wid < WidgetType.LENGTH) {
      this.widgetSelected.emit(wid)
    }
    select.value = '-1';
  }

}
