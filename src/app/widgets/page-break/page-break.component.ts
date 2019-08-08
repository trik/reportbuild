import { Component, Input, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';

@Component({
  selector: 'app-page-break',
  templateUrl: './page-break.component.html',
  styleUrls: ['./page-break.component.scss']
})
export class PageBreakComponent extends WidgetComponent {

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

}
