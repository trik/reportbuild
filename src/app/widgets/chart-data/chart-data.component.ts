import { AjfChartDataset } from '@ajf/core/reports';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartDataComponent extends WidgetComponent {

  readonly aggregationTypes = ['None', 'Sum', 'Average', 'Weighted Average'];

  get data(): AjfChartDataset {
    return this.widget as any as AjfChartDataset;
  }

  constructor(@Optional() builder: ReportBuilderComponent, cdr: ChangeDetectorRef) {
    super(builder, cdr);
  }

  onLabelChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.data.label = input.value;
    this.cdr.markForCheck();
  }

  onFormulaChange(i: number, event: Event) {
    const formula = (event.target as HTMLInputElement).value;
    this.data.formula[i] = {formula};
    this.cdr.markForCheck();
  }

  onAggregationChange(event: Event) {
    const aggregation = Number((event.target as HTMLSelectElement).value);
    this.data.aggregation = {aggregation};
    this.cdr.markForCheck();
  }

}
