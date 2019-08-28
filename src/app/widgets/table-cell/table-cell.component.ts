import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { TableCell } from '../report.interface';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableCellComponent extends WidgetComponent {

  get cell(): TableCell {
    return this.widget as TableCell;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  onLabelChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cell.label = input.value;
  }

}
