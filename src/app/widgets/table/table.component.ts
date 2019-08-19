import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { Table, emptyTableCell } from '../report.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent extends WidgetComponent {

  get table(): Table {
    return this.widget as Table;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  addRow() {
    const dataset = this.table.dataset;
    dataset.push(dataset[0].map(_ => emptyTableCell()));
  }

  addColumn() {
    for (const row of this.table.dataset) {
      row.push(emptyTableCell());
    }
  }

}
