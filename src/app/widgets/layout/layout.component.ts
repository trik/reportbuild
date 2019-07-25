import { Component } from '@angular/core';

import { WidgetType } from '../widget.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor() { }

  toObject(): any {
  	return { widgetType: WidgetType.Layout }
  }

}
