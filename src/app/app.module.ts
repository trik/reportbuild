import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { ContainerComponent } from './widgets/container/container.component';
import { ReportComponent } from './widgets/report/report.component';
import { PageBreakComponent } from './widgets/page-break/page-break.component';
import { WidgetComponent } from './widgets/widget/widget.component';
import { widgetAsContainer } from './widgets/pipes/widget-as-container.pipe';
import { widgetAsText } from './widgets/pipes/widget-as-text.pipe';
import { TextComponent } from './widgets/text/text.component';
import { ImageComponent } from './widgets/image/image.component';
import { widgetAsImage } from './widgets/pipes/widget-as-image';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    PropertiesBarComponent,
    ContainerComponent,
    ReportComponent,
    PageBreakComponent,
    WidgetComponent,
    widgetAsContainer,
    widgetAsText,
    widgetAsImage,
    TextComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
