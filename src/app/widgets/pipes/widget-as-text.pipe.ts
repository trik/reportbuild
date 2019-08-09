import { Pipe, PipeTransform } from '@angular/core';

import { Widget, Text } from '../report.interface';

@Pipe({name: 'widgetAsText'})
export class widgetAsText implements PipeTransform {
  transform(value: Widget): Text {
    return value as Text;
  }
}
