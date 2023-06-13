import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  data: any[] = [];


  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective | undefined;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
 


  constructor(
    private CrudService : CrudService,
    private toast : NgToastService
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      destroy: true,
      ordering: true,
      paging: true,
      pageLength: 5,
      lengthMenu : [5,10,15, 25, 50],
      processing: true,
      responsive: true,
      search : true,
      language: {
        "search": "Buscar ",
        "lengthMenu": "Filtrar _MENU_ ",
        "zeroRecords": "No hay registros",
        "info": "Mostrando páginas _PAGE_ de _PAGES_",
        "infoEmpty": "No hay resultados disponibles",
        "infoFiltered": "(Filtrado de _MAX_ registros)",
        "paginate": {
          first: "<",
          previous: "<<",
          next: ">>",
          last: ">"
        }
      }
    }

   

    this.CrudService.restGet('https://jsonplaceholder.typicode.com/todos').subscribe( resp =>{
      this.data = resp;
      setTimeout(() => {
        
        this.dtTrigger.next(this.dtOptions);
      }, 100);
    });

  }

  
  activeToast(){
    this.toast.error(
      {
        detail:"Alerta",
        summary:'Bottón accionado, no hay ruta para esta acción',
        duration:4000
      }
    );

  }


}
