import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { ChartData } from '../report.interface';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartDataComponent extends WidgetComponent {

  readonly aggregationTypes = ['None', 'Sum', 'Average', 'Weighted Average'];

  get data(): ChartData {
    return this.widget as ChartData;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  onLabelChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.data.label = input.value;
  }

  onFormulaChange(i: number, event: Event) {
    const formula = (event.target as HTMLInputElement).value;
    this.data.formula[i] = {formula};
  }

  onAggregationChange(event: Event) {
    let aggregation = Number((event.target as HTMLSelectElement).value);
    this.data.aggregation = {aggregation};
  }

}
