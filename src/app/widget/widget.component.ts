import { Component, Input, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../report-builder/report-builder.component';

export const widgetTypeOf = {
  'layout': 0,
  'page break': 1,
  'image': 2,
  'text': 3,
  'chart': 4,
  'table': 5,
  'map': 6,
  'column': 7,
  'formula': 8,
  'image container': 9
};

export interface Widget {
  name: string;
  properties?: Object;
  styles?: Object;
  content?: Widget[];
};

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() name: string;
  @Input() properties: Object;
  @Input() styles: Object;
  @Input() content: Widget[];

  constructor(@Optional() public builder: ReportBuilderComponent) { }

  cssClass(widgetName: string): string {
    return 'widget ' + widgetName.replace(' ', '-');
  }

  widgetSet(widgetName: string): string[] {
    switch (widgetName) {
    case 'layout':
      return []; // columns can be added to layout, but we use a specialized path
    case 'column':
      return ['layout', 'image', 'text', 'chart', 'table', 'map', 'image container'];
    case 'header':
    case 'footer':
      return ['layout', 'image', 'text', 'image container'];
    case 'content':
      return Object.keys(widgetTypeOf).filter(w => w !== 'column' && w !== 'formula');
    default:
      return [];
    }
  }

  addWidgetClicked(event: Event) {
    const select = event.srcElement as HTMLSelectElement;
    const name = select.value;
    if (name === 'add widget') {
      return;
    }
    this.addWidget(name);
    select.value = 'add widget';
  }

  addWidget(name: string) {
    if (!this.content) {
      this.content = [];
    }
    if (name === 'layout') {
      this.content.push({name, content: [{name: 'column'}, {name: 'column'}]});
    } else {
      this.content.push({name});
    }
  }

}
