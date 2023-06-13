import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  @Output() loading: EventEmitter<any> = new EventEmitter();
 /*  @Output() texto: EventEmitter<any> = new EventEmitter(); */

  constructor() { }

  show(value : any, text? : any) {
     text = (text) ? text : 'Cargando';
     this.loading.emit({loading : value,texto : text });
  }

  getEmittedValue() {
     return this.loading;
  }
}
