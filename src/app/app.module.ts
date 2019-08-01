import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { LayoutComponent } from './widgets/layout/layout.component';
import { PageBreakComponent } from './widgets/page-break/page-break.component';
import { ContentComponent } from './widgets/content/content.component';
import { ColumnComponent } from './widgets/column/column.component';
import { PropertiesBarComponent } from './properties-bar/properties-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBuilderComponent,
    LayoutComponent,
    PageBreakComponent,
    ContentComponent,
    ColumnComponent,
    PropertiesBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [LayoutComponent, PageBreakComponent, ColumnComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
