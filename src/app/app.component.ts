import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-angular';

  constructor(
    private toast : NgToastService
  ){
    
  }

  ngOnInit(){

    this.toast.success({
      detail: 'Exito',
      summary: 'Texto descriptivo',
      duration: 3000
    });

  
  }
}
