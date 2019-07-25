import { Injectable, ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetFactoryService {

  factories: ComponentFactory<any>[] = [];

  constructor(factoryResolver: ComponentFactoryResolver) {
    this.factories.push(factoryResolver.resolveComponentFactory(LayoutComponent)); // 0
  }
}
