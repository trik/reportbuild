import { Component, Input, Optional } from '@angular/core';

import { Widget } from '../report.interface';
import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';

@Component({
  selector: 'app-page-break',
  templateUrl: './page-break.component.html',
  styleUrls: ['./page-break.component.scss']
})
export class PageBreakComponent extends WidgetComponent {

  @Input() widget: Widget;

  constructor(
    @Optional() public builder: ReportBuilderComponent,
    @Optional() public parent: WidgetComponent
  ) {
    super(builder, parent);
  }

}
