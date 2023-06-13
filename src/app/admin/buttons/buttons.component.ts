import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable, firstValueFrom } from 'rxjs';
import { FilesService } from 'src/app/shared/services/files.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { OpenPdfService } from 'src/app/shared/services/open-pdf.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  files : any[] = [];

  constructor(
    private toast : NgToastService,
    private openPdfService : OpenPdfService,
    private loading : LoadingService,
    private filesService : FilesService
  ) { }

  ngOnInit(): void {
  }


  onSelectFile(event : any, dragDrop : boolean){

    let resultFile : any = this.filesService.onLoadFile(event,dragDrop,'imagen').then( resp =>{
      
      if(resp.length > 0){
        if(this.files.length > 0){
          resp.forEach((element : any) => {
              this.files.push(element);
          });
        }else{
          this.files = resp;
        }
      }

    });
    
    
   
    
  }

 
  deleteFile(name : string){
    let indexOfObject = this.files.findIndex((object) => {
      return object.nombreArchivo === name;
    });

    if (indexOfObject !== -1) {
      this.files.splice(indexOfObject, 1);
    }
  }

  verPdf (base64 : any ){

      this.filesService.verPdf(base64);
  }

}
