import { Component, Input } from '@angular/core';

import { Widget } from '../widgets/widget.interface';

export var selectedWidget: Widget = null;

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss']
})
export class PropertiesBarComponent {

  @Input() widget: Widget;

  constructor() { }

}
