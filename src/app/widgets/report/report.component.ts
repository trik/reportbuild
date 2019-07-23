import { Component, AfterViewInit, ViewChild, ComponentFactory,
  ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements AfterViewInit {
  private layoutFactory: ComponentFactory<LayoutComponent>;

  @ViewChild('content', {read: ViewContainerRef})
  content: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  	this.layoutFactory = this.factoryResolver.resolveComponentFactory(LayoutComponent);
  }

  ngAfterViewInit() {
  	this.content.createComponent(this.layoutFactory);
  }

}
