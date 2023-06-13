import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { LoadingService } from './loading.service';
import { OpenPdfService } from './open-pdf.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  files : any[] = [];

  constructor(
    private loading : LoadingService,
    private openPdfService : OpenPdfService,
    private toast : NgToastService
  ) { }


  readFile(file: File): Observable<string> {
    return new Observable(obs => {
      const reader = new FileReader();
      reader.onload = () => {
        obs.next(reader.result as string);
        obs.complete();
        obs.error(null);
      }
      reader.readAsDataURL(file);
    });
  }

  verPdf(url : string){
    this.loading.show(true, "Abriendo Documento");
   
    setTimeout(() => {
      this.loading.show(false);
      this.openPdfService.open(url);
    }, 2000);

  }

  async onLoadFile(event : any, dragDrop : boolean, typeFile : string){
    let loading = (dragDrop) ? event.element?.target.offsetParent.querySelector('.spinner-files') : event.target.offsetParent?.querySelector('.spinner-files') ;
    let fileValidate = true;
    let typesFiles: any =  [];
    this.files = [];

    switch (typeFile) {
      case 'imagen':
        typesFiles = ['image/jpeg','image/png','image/jpg'];
        break;
      case 'pdf':
        typesFiles = ['application/pdf'];
        break;
    }

    if(loading != null ){
      loading.classList.add('loading');
    }

    if (event.target.files && event.target.files[0]) {

      for (let i = 0; i < event.target.files.length; i++) {
        if(!typesFiles.includes(event.target.files[i].type) ){
          fileValidate = false;
        }
      }

      if(fileValidate){
        let fileUpload : any;

        for (let index = 0; index < event.target.files.length; index++) { //iteración sobre el arreglo de archivos en caso de subir varios
          fileUpload = event.target.files[index];
          
          if(fileUpload.size <= 2000000){

            let fileBase64 = await firstValueFrom(this.readFile(fileUpload)) ;
            
            if(fileBase64 != null){
                
              let file = {
                nombreArchivo : fileUpload.name,
                mime : fileUpload.type,
                base64 : fileBase64
              }
  
              this.files.push(file);
            }else{
              this.toast.error(
                {
                  detail : 'Error de archivo',
                  summary: 'El archivo '+ fileUpload.name + ' no se pudo procesar, revisálo y vuelve a subirlo',
                  duration : 2000
                }
              );

              return this.files;
            }

          }else{
            this.toast.error(
              {
                detail : 'Excede el tamaño',
                summary: 'Uno de sus archivos cargados excede el tamaño admitido (2mb)',
                duration : 4000
              }
            );

            loading.classList.remove('loading');
            return this.files;

          }
        }

        loading.classList.remove('loading');
        return this.files;
      }else{
        this.toast.error(
          {
            detail : 'Error de archivo',
            summary: 'Tipo de archivo no admitido',
            duration : 2000
          }
        );
        
        return this.files;
      }
    }

    return this.files;
  }

}
