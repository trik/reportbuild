import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { IT } from '../report.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent extends WidgetComponent {

  readonly IT = IT;
  readonly keys = Object.keys;

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

}
