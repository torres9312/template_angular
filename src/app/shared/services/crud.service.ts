import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable,forkJoin,map, from, concatMap, delay, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }
  //******************************************************************************************************//
  restGet(url : string) {
    return this.http.get<any[]>(environment.apiURL + url);
  }
  //******************************************************************************************************//
  
  async serviceAsyncGet(url : any ){
    let entidad : any = false;
    await firstValueFrom(this.restGet(`${url}`  ))
    .then((value: any) => {
        entidad = value;
        return entidad;
      }
    )
    return entidad;
  }
  //******************************************************************************************************//
  restDelete(url : string, entidad : any) {
    return this.http.delete(environment.apiURL + url, entidad);
  }
  //******************************************************************************************************//
  restPost(url : string, entidad : any) {
    return this.http.post<any>(environment.apiURL + url, entidad);
  }

  //******************************************************************************************************//
  restPut(url : string, entidad : any) {
    return this.http.put( environment.apiURL  + url, entidad);
  }

  //******************************************************************************************************//
  restPostBlob(url : string, entidad : any): Observable<any> {
    return this.http.post(environment.apiURL + url, entidad,{responseType:"blob",headers: new HttpHeaders().append("Content-Type", "application/json")});
  }
  //******************************************************************************************************//
  restPostString(url : string, entidad : any): Observable<any> {
    return this.http.post(environment.apiURL + url, entidad,{responseType:"text",headers: new HttpHeaders().append("Content-Type", "application/json")});
  }
  //******************************************************************************************************//
  restGetString(url : string): Observable<any> {
    return this.http.get(environment.apiURL + url, {responseType:"text",headers: new HttpHeaders().append("Content-Type", "application/json")});
  }
  //******************************************************************************************************//
  restPutString(url : string, entidad : any): Observable<any> {
    return this.http.put(environment.apiURL + url, entidad,{responseType:"text",headers: new HttpHeaders().append("Content-Type", "application/json")});
  }
  //******************************************************************************************************//

}
