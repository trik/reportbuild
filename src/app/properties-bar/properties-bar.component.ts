import { Component, Input } from '@angular/core';

import { WidgetComponent } from '../widgets/widget/widget.component';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss']
})
export class PropertiesBarComponent {

  @Input() widget: WidgetComponent;

  constructor() { }

}
