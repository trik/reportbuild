import { Component, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import { WidgetComponent } from '../widgets/widget/widget.component';
import { Widget, TableCell } from '../widgets/report.interface';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertiesBarComponent {

  @ViewChild('stylesForm', {static: false}) stylesForm: ElementRef;

  @Input() component: WidgetComponent;

  get widget(): Widget {
    return this.component.widget;
  }

  constructor() { }

  onVisibilityConditionChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (val === '') {
      delete this.widget.visibility;
    } else {
      this.widget.visibility = {condition: val};
    }
  }

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
    setTimeout(() => {
      // Give focus to the value input of the added property:
      const children = this.stylesForm.nativeElement.childNodes;
      if (children.length-3 < 0) {
        return
      }
      (children[children.length-3] as HTMLInputElement).focus();
    }, 100);
  }

  addNewStyle(key: string) {
    if (!this.widget.styles) {
      this.widget.styles = {};
    }
    this.widget.styles[key] = '';
  }

  onStyleKeyChange(oldKey: string, event: Event) {
    const newKey = (event.target as HTMLInputElement).value;
    const styles = this.widget.styles;
    const val = styles[oldKey];
    delete styles[oldKey];
    if (newKey === '') {
      return;
    }
    styles[newKey] = val;
  }

  onStyleValChange(key: string, event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.widget.styles[key] = val;
  }

  onFormulaChange(propertyName: string, event: Event) {
    const formula = (event.target as HTMLInputElement).value;
    this.widget[propertyName] = {formula};
  }

  onAggregationChange(event: Event) {
    let aggregation = Number((event.target as HTMLInputElement).value);
    if (!aggregation) {
      aggregation = 0;
    }
    (this.widget as TableCell).aggregation = {aggregation};
  }

}
