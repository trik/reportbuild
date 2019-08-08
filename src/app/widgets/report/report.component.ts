import { Component, Optional, OnInit } from '@angular/core';

import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { WidgetComponent } from '../widget/widget.component';
import { Report } from '../report.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent extends WidgetComponent implements OnInit {

  report: Report;

  constructor(
    @Optional() public builder: ReportBuilderComponent,
    @Optional() public parent: WidgetComponent
  ) {
    super(builder, parent);
  }

  ngOnInit() {
    this.report = this.widget as Report;
  }

}
