import { Injectable, ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { PageBreakComponent } from './page-break/page-break.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetFactoryService {

  factories: ComponentFactory<any>[] = [];

  constructor(factoryResolver: ComponentFactoryResolver) {

  	const comps = [ // must appear in the order defined by widget type
  	  LayoutComponent,
  	  PageBreakComponent,
  	];

  	for (const c of comps) {
      this.factories.push(factoryResolver.resolveComponentFactory(c));
  	}
  }
}
