import { Component, Optional, ViewEncapsulation } from '@angular/core';

import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { WidgetComponent } from '../widget/widget.component';
import { Report } from '../report.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent extends WidgetComponent {

  get report(): Report {
    return this.widget as Report;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

}
