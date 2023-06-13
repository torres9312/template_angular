import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarOpenService {

  @Output() collapsed : EventEmitter<any> = new EventEmitter;

  constructor() { }

  collapseMenu(value : boolean){
      this.collapsed.emit(value);
      let maincontent = document.getElementById('main-content-admin');
      if(!maincontent?.classList.contains('full-width')){
        maincontent?.classList.add('full-width');
      }else{
        maincontent?.classList.remove('full-width');
      }
  }

  getEmittedValue() {
    return this.collapsed;
  }
}
