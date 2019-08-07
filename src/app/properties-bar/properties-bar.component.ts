import { Component, Input } from '@angular/core';

import { Widget } from '../widgets/report.interface';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss']
})
export class PropertiesBarComponent {

  @Input() widget: Widget;

  constructor() { }

}
