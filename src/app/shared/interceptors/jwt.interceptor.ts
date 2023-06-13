import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // check if the current user is logged in
    // if the user making the request is logged in, he will have JWT token in it's local storage, which is set by Authorization Service during login process
    let token = sessionStorage.getItem('token');
    if (token) {
      let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
      });
   
      const authReq = request.clone({ headers: headers });
      
      return next.handle(authReq);
    }else{
      return next.handle(request);
    }
    
  }
}
