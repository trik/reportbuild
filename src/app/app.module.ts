import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { ContainerComponent } from './widgets/container/container.component';
import { ReportComponent } from './widgets/report/report.component';
import { PageBreakComponent } from './widgets/page-break/page-break.component';
import { WidgetComponent } from './widgets/widget/widget.component';
import { TextComponent } from './widgets/text/text.component';
import { ImageComponent } from './widgets/image/image.component';
import { ImageContainerComponent } from './widgets/image-container/image-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    PropertiesBarComponent,
    ContainerComponent,
    ReportComponent,
    PageBreakComponent,
    WidgetComponent,
    TextComponent,
    ImageComponent,
    ImageContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
