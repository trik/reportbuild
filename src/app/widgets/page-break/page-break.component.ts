import { Component } from '@angular/core';

import { WidgetType } from '../widget-type';

@Component({
  selector: 'app-page-break',
  templateUrl: './page-break.component.html',
  styleUrls: ['./page-break.component.scss']
})
export class PageBreakComponent {

  constructor() { }

  toObject(): any {
  	return { widgetType: WidgetType.PageBreak }
  }

}
