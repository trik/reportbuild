import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { LayoutComponent } from './widgets/layout/layout.component';
import { PageBreakComponent } from './widgets/page-break/page-break.component';
import { ContentComponent } from './widgets/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    LayoutComponent,
    PageBreakComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [LayoutComponent, PageBreakComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
