import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from "./shared/directives/directives.module";
import { NotFoundComponent } from './shared/404/not-found.component';
import {NgToastModule} from 'ng-angular-popup';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import {RouterModule} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { TokenInterceptor } from './shared/interceptors/jwt.interceptor';
import { FormsModule } from '@angular/forms';
import { ViewPdfComponent } from './shared/view-pdf/view-pdf.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    DirectivesModule,
    NgToastModule,
    AdminModule,
    PublicModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    AdminModule,
    PublicModule,
  ],
  providers: [
    { provide: CookieService},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
