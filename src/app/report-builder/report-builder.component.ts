import { Component, ViewEncapsulation } from '@angular/core';

import { Report } from '../widgets/report.interface';
import { WidgetComponent } from '../widgets/widget/widget.component';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportBuilderComponent {

  selectedComponent: WidgetComponent;
  showOutput = false;
  report: Report = {header: {content: []}, content: {content: []}, footer: {content: []}};

  constructor() { }

  onLoadJson(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = ev => {
      const text = (ev.target as any).result;
      let report: any;
      try {
        report = JSON.parse(text);
      } catch (ex) {
        window.alert('Invalid json: ' + ex);
        return;
      }
      this.report = report;
    };
    reader.readAsText(file);
  }
}
