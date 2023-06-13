import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenPdfService {
  
  @Output() openPdf : EventEmitter<any> = new EventEmitter;

  open(url : any) {
    this.openPdf.emit(url);
  }

  getEmittedValue() {
      return this.openPdf;
  }
}
