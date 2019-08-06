import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    PropertiesBarComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
