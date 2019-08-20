import { Component, Input, ViewEncapsulation } from '@angular/core';

import { WidgetComponent } from '../widgets/widget/widget.component';
import { TableCell } from '../widgets/report.interface';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertiesBarComponent {

  @Input() component: WidgetComponent;

  get widget(): any {
    return this.component.widget;
  }

  constructor() { }

  onVisibilityConditionChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (val === '') {
      delete this.widget.visibility;
    } else {
      this.widget.visibility = {condition: val};
    }
  }

  onFormulaChange(propertyName: string, event: Event) {
    const formula = (event.target as HTMLInputElement).value;
    this.widget[propertyName] = {formula};
  }

  onAggregationChange(event: Event) {
    let aggregation = Number((event.target as HTMLInputElement).value);
    if (!aggregation) {
      aggregation = 0;
    }
    (this.widget as TableCell).aggregation = {aggregation};
  }

}
