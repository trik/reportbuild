import { Component } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent {

  showOutput = false;
  selectedWidget: WidgetComponent = null;

  constructor() {}

  toObject(): any {
    return {}
    /*return {
      header: { content: this.header.toObject() },
      content: { content: this.content.toObject() },
      footer: { content: this.footer.toObject() },
    };*/
  }
}
