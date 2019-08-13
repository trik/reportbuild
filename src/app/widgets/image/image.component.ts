import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { IT, Image } from '../report.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent extends WidgetComponent {

  readonly IT = IT;
  readonly keys = Object.keys;

  get image(): Image {
    return this.widget as Image;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  formulaInputLabel(): string {
    switch (this.image.imageType) {
    case IT.Image:
      return 'url formula: ';
    case IT.Flag:
      return 'flag formula: ';
    case IT.Icon:
      return 'icon formula: ';
    default:
      throw new Error('unknown image type');
    }
  }

  getFormula(): string {
    switch (this.image.imageType) {
    case IT.Image:
      return this.image.url.formula;
    case IT.Flag:
      return this.image.flag.formula;
    case IT.Icon:
      return this.image.icon.formula;
    default:
      throw new Error('unknown image type');
    }
  }

  setFormula(formula: string) {
    delete this.image.url;
    delete this.image.flag;
    delete this.image.icon;
    switch (this.image.imageType) {
    case IT.Image:
      this.image.url = {formula};
      return;
    case IT.Flag:
      this.image.flag = {formula};
      return;
    case IT.Icon:
      this.image.icon = {formula};
      return;
    default:
      throw new Error('unknown image type');
    }
  }

  onImageTypeChange(event: Event) {
    const formula = this.getFormula();

    const select = event.target as HTMLSelectElement;
    this.image.imageType = Number(select.value);
    
    this.setFormula(formula);
  }

  onFormulaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.setFormula(input.value);
  }

}
