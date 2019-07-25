import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { LayoutComponent } from './widgets/layout/layout.component';
import { AddWidgetButtonComponent } from './widgets/add-widget-button/add-widget-button.component';
import { PageBreakComponent } from './widgets/page-break/page-break.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    LayoutComponent,
    AddWidgetButtonComponent,
    PageBreakComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [LayoutComponent, PageBreakComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
