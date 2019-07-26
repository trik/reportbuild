import { Component, Input, ViewChild, ViewContainerRef,
  ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { Widget, WidgetType, WidgetName } from '../widget.interface';
import { LayoutComponent } from '../layout/layout.component';
import { PageBreakComponent } from '../page-break/page-break.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  readonly WidgetName = WidgetName;
  factories: ComponentFactory<Widget>[] = [];

  @Input() widgetSet: WidgetType[];
  @ViewChild('contentBody', {read: ViewContainerRef}) contentBody: ViewContainerRef;
  content: Widget[] = [];

  constructor(factoryResolver: ComponentFactoryResolver) {
    const comps = [ // must appear in the order defined by widget type
      LayoutComponent,
      PageBreakComponent,
    ];
    for (const c of comps) {
      this.factories.push(factoryResolver.resolveComponentFactory(c));
    }
  }

  onWidgetSelected(event: Event) {
    const select = event.srcElement as HTMLSelectElement;
    const wid = Number(select.value);
    if (wid === -1) {
      return;
    }
    this.addWidget(wid);
    select.value = '-1';
  }

  addWidget(wid: WidgetType) {
    const compRef = this.contentBody.createComponent(this.factories[wid]);
    this.content.push(compRef.instance);
  }

  toObject(): any {
    return this.content.map(w => w.toObject());
  }

}
