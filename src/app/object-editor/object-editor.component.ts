import { Component, Input, ViewEncapsulation, OnDestroy } from '@angular/core';

import { Widget } from '../widgets/report.interface';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-object-editor',
  templateUrl: './object-editor.component.html',
  styleUrls: ['./object-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ObjectEditorComponent implements OnDestroy {

  keyUp = new Subject<KeyboardEvent>();
  private sub: Subscription;

  @Input() widget: Widget;
  @Input() objectName: string;

  jsonIsValid = true;

  get object() { return this.widget[this.objectName]; }
  set object(o: any) { this.widget[this.objectName] = o; }

  constructor() {
    this.sub = this.keyUp.pipe(debounceTime(200)).subscribe(e => {
      this.onObjectChange(e);
    });
  }

  deleteObject() {
    delete this.widget[this.objectName];
  }

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
    } catch (_) {
      this.jsonIsValid = false;
      return;
    }
    this.object = o;
    this.jsonIsValid = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
