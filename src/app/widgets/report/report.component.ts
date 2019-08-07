import { Component, Input, Optional } from '@angular/core';

import { Report } from '../report.interface';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  @Input() report: Report;

  constructor(@Optional() public builder: ReportBuilderComponent) { }
}
