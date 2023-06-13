import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from './crud.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private CrudService : CrudService
  ) { }

   //******************************************************************************************************//
   login(email: string, password: string) {
    //**********************************************************************************//
    let grantType: string = "password"
    let arrayPerfiles: any[]=[];
    

    //**********************************************************************************//
    return this.http.post<any>(`${environment.apiURL}/login`, { email, password, grantType })
    .pipe(
      map(user => {
        if (user && user.token) {
        
          const jsonWebToken: any = jwt_decode(user.token);
          let jsonPrivileges = JSON.parse(jsonWebToken.privilege_model.privileges);
/* 
          sessionStorage.setItem('token',user.token);
          sessionStorage.setItem('username',jsonPrivileges[0].usuario);
          this.cookieService.set('usr_',jsonPrivileges[0].usuario);
          sessionStorage.setItem('userId',jsonPrivileges[0].usuario_id); */
        }
        return user;
      }, (error: any) =>{

        sessionStorage.clear();
        console.log(error);

        return;
      })
    );
  }

  /*******************************************************/

  restGet(url:string){
    return this.http.get<any[]>(environment.apiURL + url);
  }
  //*****************************************************************//

  validateSession () : boolean{
    let token = sessionStorage.getItem('token') || null;
    
    if(token){
      const jsonWebToken: any = jwt_decode(token);




    }

    return false;
  }

//*****************************************************************//

  logout(error? : boolean) {
    sessionStorage.clear();
    this.cookieService.deleteAll();
    
    if(error){
      
    }else{
      
    }
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}




