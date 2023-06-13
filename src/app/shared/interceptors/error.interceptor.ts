import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, of  } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from '../services/auth.service';
import { CookieService } from "ngx-cookie-service";
/*
Http error interceptor works with the calling service and the API's
It intercepts the responses from the API and check for the status codes (if there were any errors).
Error Status 401: Unauthorized Response - the user will be automatically logged out
All other errors are RE-THROWN to be caught by the calling service so an alert can be displayed to the user
*/

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

 
  
  constructor(
    private authenticationService: AuthService,
    private cookieService : CookieService
  ) {}
  //******************************************************************************************************//
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {


          if(sessionStorage.getItem('token')){
            setTimeout(() => {
              this.authenticationService.logout();
            }, 1500);
          }
          console.log(err);
          /* location.reload(true); */
        }
        return throwError(err);
      })
    );
  }
  //******************************************************************************************************//
}
