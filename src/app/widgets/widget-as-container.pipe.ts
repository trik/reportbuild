import {Pipe, PipeTransform} from '@angular/core';
import { Widget, WidgetContainer } from './report.interface';

@Pipe({name: "widgetAsContainer"})
export class widgetAsContainer implements PipeTransform {
    transform(value: Widget): WidgetContainer {
        return value as WidgetContainer;
    }
}