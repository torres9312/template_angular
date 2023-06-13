import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { OpenPdfService } from '../services/open-pdf.service';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPdfComponent implements OnInit {

  viewPdf : boolean = false;
  file : string = '';
  isImage: boolean = false;

  constructor(
    private openPdfService : OpenPdfService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {

    this.openPdfService.getEmittedValue().subscribe((item: any) => {
      if(item != null){
        let mime = item.split(':').pop().split(';')[0].split('/')[0];
        this.isImage = (mime === 'image') ? true : false;
        this.file = item;
        this.viewPdf = true;
        this.document.body.style.overflow = 'hidden';
      }
    });

  }

  onClose(){
    this.document.body.style.overflow = 'auto';
    this.viewPdf = false;
    this.file = '';
  }



}
