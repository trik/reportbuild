import { Component } from '@angular/core';

import { Report, Widget } from '../widgets/report.interface';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent {

  selectedWidget: Widget;
  showOutput = false;
  report: Report = {header: {}, content: {}, footer: {}};

  constructor() { }
}
