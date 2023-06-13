import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';


@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  
  loading : boolean;
  loadService : any;
  texto : string;

  constructor(loadService : LoadingService) { 
    this.loading = false;
    this.loadService = loadService;
    this.texto = 'Cargando';
  }

  ngOnInit(): void {
    this.loadService.getEmittedValue().subscribe((item: any) => {
        this.loading = item.loading,
        this.texto = item.texto
    });
  }


}
