import { Component, Input } from '@angular/core';

import { Widget } from '../report.interface';

@Component({
  selector: 'app-page-break',
  templateUrl: './page-break.component.html',
  styleUrls: ['./page-break.component.scss']
})
export class PageBreakComponent {

  @Input() widget: Widget;

  constructor() { }

}
