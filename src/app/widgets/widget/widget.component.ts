import { Component, Input, HostListener } from '@angular/core';

import { Widget, WidgetContainer } from '../report.interface';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';

// Base class for widgets.
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  @Input() widget: Widget;
  @Input() parent: WidgetContainer;

  constructor(public builder: ReportBuilderComponent) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    this.builder.selectedComponent = this;
  }

}
