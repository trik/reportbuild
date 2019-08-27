import { Component, ViewEncapsulation, Optional } from '@angular/core';

import { ReportBuilderComponent } from '../../report-builder/report-builder.component';
import { Map } from '../report.interface';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent extends WidgetComponent {

  get map(): Map {
    return this.widget as Map;
  }

  constructor(@Optional() builder: ReportBuilderComponent) {
    super(builder);
  }

  onDisabledChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.map.disabled = input.checked;
  }

  onCoordinateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.map.coordinate = {formula: input.value};
  }

  onTileLayerChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.map.tileLayer = input.value;
  }

  onAttributionChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.map.attribution = input.value;
  }

}
