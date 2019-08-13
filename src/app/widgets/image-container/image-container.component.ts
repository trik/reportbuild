import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { WidgetComponent } from '../widget/widget.component';
import { ReportBuilderComponent } from 'src/app/report-builder/report-builder.component';
import { IT, ImageContainer } from '../report.interface';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageContainerComponent extends WidgetComponent {

  readonly IT = IT;
  readonly keys = Object.keys;

  get imageContainer(): ImageContainer {
    return this.widget as ImageContainer;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  formulaInputLabel(): string {
    switch (this.imageContainer.imageType) {
    case IT.Image:
      return 'urls formula: ';
    case IT.Flag:
      return 'flags formula: ';
    case IT.Icon:
      return 'icons formula: ';
    default:
      throw new Error('unknown image type');
    }
  }

  getFormula(): string {
    switch (this.imageContainer.imageType) {
    case IT.Image:
      return this.imageContainer.urls.formula;
    case IT.Flag:
      return this.imageContainer.flags.formula;
    case IT.Icon:
      return this.imageContainer.icons.formula;
    default:
      throw new Error('unknown image type');
    }
  }

  setFormula(formula: string) {
    delete this.imageContainer.urls;
    delete this.imageContainer.flags;
    delete this.imageContainer.icons;
    switch (this.imageContainer.imageType) {
    case IT.Image:
      this.imageContainer.urls = {formula};
      return;
    case IT.Flag:
      this.imageContainer.flags = {formula};
      return;
    case IT.Icon:
      this.imageContainer.icons = {formula};
      return;
    default:
      throw new Error('unknown image type');
    }
  }

  onImageTypeChange(event: Event) {
    const formula = this.getFormula();

    const select = event.target as HTMLSelectElement;
    this.imageContainer.imageType = Number(select.value);
    
    this.setFormula(formula);
  }

  onFormulaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.setFormula(input.value);
  }

}
