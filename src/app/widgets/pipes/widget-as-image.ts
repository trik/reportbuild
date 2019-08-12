import { Pipe, PipeTransform } from '@angular/core';

import { Widget, Image } from '../report.interface';

@Pipe({name: 'widgetAsImage'})
export class widgetAsImage implements PipeTransform {
  transform(value: Widget): Image {
    return value as Image;
  }
}
