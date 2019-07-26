import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { ContentComponent } from '../widgets/content/content.component';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent {

  @ViewChild('header')  header:  ContentComponent;
  @ViewChild('content') content: ContentComponent;
  @ViewChild('footer')  footer:  ContentComponent;

  constructor() {}

  toObject(): any {
    return {
      header: { content: this.header.toObject() },
      content: { content: this.content.toObject() },
      footer: { content: this.footer.toObject() },
    };
  }
}
