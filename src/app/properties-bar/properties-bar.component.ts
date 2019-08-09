import { Component, Input, ViewEncapsulation } from '@angular/core';

import { WidgetComponent } from '../widgets/widget/widget.component';
import { Widget } from '../widgets/report.interface';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertiesBarComponent {

  @Input() component: WidgetComponent;

  get widget(): Widget {
    return this.component.widget;
  }

  constructor() { }

  styleKeys(): string[] {
    return Object.keys(this.component.widget.styles || {});
  }

  styleVal(key: string): string {
    return (this.widget.styles || {})[key] || '';
  }

  onNewStyle(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value === '') {
      return
    }
    this.addNewStyle(input.value);
    input.value = '';
  }

  addNewStyle(key: string) {
    if (!this.widget.styles) {
      this.widget.styles = {};
    }
    this.widget.styles[key] = '';
    console.log(this.widget);
  }

}
