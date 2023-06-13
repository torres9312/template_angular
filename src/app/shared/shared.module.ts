import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/sanitizer';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';




@NgModule({
  declarations: [
    SafePipe,
    ViewPdfComponent,
    LoadingPageComponent,
    ViewPdfComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SafePipe,
    LoadingPageComponent,
    ViewPdfComponent
  ]
})
export class SharedModule { }
