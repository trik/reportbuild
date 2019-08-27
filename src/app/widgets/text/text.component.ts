import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { Text } from '../report.interface';
import { WidgetComponent } from '../widget/widget.component';

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
