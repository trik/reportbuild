import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { TableCell } from '../report.interface';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableCellComponent extends WidgetComponent {

  get tableCell(): TableCell {
    return this.widget as TableCell;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

}
