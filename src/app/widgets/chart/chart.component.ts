import { AjfChartWidget } from '@ajf/core/reports';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { emptyChartData } from '../report.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent extends WidgetComponent {

  readonly chartTypes = ['Line', 'Bar', 'Horizontal Bar', 'Radar', 'Scatter', 'Doughnut', 'Pie', 'Polar Area', 'Bubble'];

  get chart(): AjfChartWidget {
    return this.widget as AjfChartWidget;
  }

  constructor(@Optional() builder: ReportBuilderComponent, cdr: ChangeDetectorRef) {
    super(builder, cdr);
  }

  onChartTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.chart.chartType = Number(select.value);
    this.cdr.markForCheck();
  }

  onLabelsChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.chart.labels = {formula: input.value};
    this.cdr.markForCheck();
  }

  addData() {
    this.chart.dataset.push(emptyChartData());
    this.cdr.markForCheck();
  }

}
