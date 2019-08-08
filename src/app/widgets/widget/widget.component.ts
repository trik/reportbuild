import { Component, Input, HostListener } from '@angular/core';

import { Widget, Report } from '../report.interface';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';

// Base class for widgets.
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() widget: Widget | Report;

  constructor(
    public builder: ReportBuilderComponent,
    public parent: WidgetComponent
  ) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    this.builder.selectedWidget = this;
  }

}
