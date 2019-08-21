import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Widget } from '../widgets/report.interface';

@Component({
  selector: 'app-object-editor',
  templateUrl: './object-editor.component.html',
  styleUrls: ['./object-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ObjectEditorComponent {

  @Input() widget: Widget;
  @Input() objectName: string;

  get object() { return this.widget[this.objectName] }
  set object(o: any) { this.widget[this.objectName] = o }
  deleteObject() { delete this.widget[this.objectName] }

  jsonIsValid = true;

  constructor() { }

  onObjectChange(event: Event) {
    const text = (event.target as HTMLTextAreaElement).value;
    if (text === '') {
      this.deleteObject();
      this.jsonIsValid = true;
      return;
    }
    let o: any;
    try {
      o = JSON.parse(text);
    } catch(_) {
      this.jsonIsValid = false;
      return;
    }
    this.object = o;
    this.jsonIsValid = true;
  }

}
