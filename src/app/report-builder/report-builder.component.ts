import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ReportComponent } from '../widgets/report/report.component';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent implements AfterViewInit {
  @ViewChild(ReportComponent) report: ReportComponent;

  ngAfterViewInit() {
  	console.log(this.report.test);
  }
}
