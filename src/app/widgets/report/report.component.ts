import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { WidgetFactoryService } from '../widget-factory.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  public test = 'helloooo';

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
