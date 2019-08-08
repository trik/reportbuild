import { Component } from '@angular/core';

import { Report } from '../widgets/report.interface';
import { WidgetComponent } from '../widgets/widget/widget.component';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent {

  selectedWidget: WidgetComponent;
  showOutput = false;
  report: Report = {header: {content: []}, content: {content: []}, footer: {content: []}};

  constructor() { }
}
