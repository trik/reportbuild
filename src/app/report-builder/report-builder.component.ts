import { Component, ViewChild } from '@angular/core';

import { Widget } from '../widgets/widget.interface';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent {

  showOutput = false;

  // ContentComponents are viewed as Widgets to avoid circular dependencies:
  @ViewChild('header')  header:  Widget;
  @ViewChild('content') content: Widget;
  @ViewChild('footer')  footer:  Widget;

  constructor() {}

  toObject(): any {
    return {
      header: { content: this.header.toObject() },
      content: { content: this.content.toObject() },
      footer: { content: this.footer.toObject() },
    };
  }
}
