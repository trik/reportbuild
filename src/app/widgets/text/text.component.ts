import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { Text } from '../report.interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent extends WidgetComponent {

  get text(): Text {
    return this.widget as Text;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  onTextChange(event: Event) {
    (this.widget as Text).htmlText = (event.target as HTMLTextAreaElement).value;
  }

}
