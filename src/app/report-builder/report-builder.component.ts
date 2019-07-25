import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { WidgetFactoryService } from '../widgets/widget-factory.service';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent {

  @ViewChild('contentPoint', {read: ViewContainerRef}) contentPoint: ViewContainerRef;
  content: any[] = [];

  constructor(private factoryService: WidgetFactoryService) {}

  addWidget(wid: number) {
    const factory = this.factoryService.factories[wid];
    const compRef = this.contentPoint.createComponent(factory);
    this.content.push(compRef.instance);
  }

  public toObject(): any {
    return {
      header: {},
      content: this.content.map(w => w.toObject()),
      footer: {},
    };
  }
}
