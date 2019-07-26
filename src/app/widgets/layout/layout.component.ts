import { Component, ComponentFactory, ComponentFactoryResolver,
  ViewChild, ViewContainerRef, AfterContentInit } from '@angular/core';

import { WidgetType } from '../widget.interface';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterContentInit {

  columnFactory: ComponentFactory<ColumnComponent>;

  @ViewChild('contentBody', {read: ViewContainerRef}) contentBody: ViewContainerRef;
  content: ColumnComponent[] = [];

  constructor(factoryResolver: ComponentFactoryResolver) {
    this.columnFactory = factoryResolver.resolveComponentFactory(ColumnComponent);
  }

  ngAfterContentInit() {
    // The timeout avoids expressionChangedAfterItHasBeenCheckedError:
    setTimeout( () => {
      this.addColumn();
      this.addColumn();
    }, 100);
  }

  addColumn() {
    const colRef = this.contentBody.createComponent(this.columnFactory);
    this.content.push(colRef.instance);
  }

  toObject(): any {
  	return {
      widgetType: WidgetType.Layout,
      columns: this.content.map(_ => -1),
      content: this.content.map(col => col.toObject()),
    };
  }

}
