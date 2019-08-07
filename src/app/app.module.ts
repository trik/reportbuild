import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';
import { ContainerComponent } from './widgets/container/container.component';
import { ReportComponent } from './widgets/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    PropertiesBarComponent,
    ContainerComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
