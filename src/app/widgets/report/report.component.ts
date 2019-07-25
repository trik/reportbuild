import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { WidgetFactoryService } from '../widget-factory.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  public test = 'helloooo';

  @ViewChild('content', {read: ViewContainerRef}) content: ViewContainerRef;

  constructor(private factoryService: WidgetFactoryService) {}

  addWidget(wid: number) {
    this.content.createComponent(this.factoryService.factories[wid]);
  }

  public serialize(): string {
    return '{ report }';
  }

}
