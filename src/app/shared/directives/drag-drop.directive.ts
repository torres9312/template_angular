import {
  Directive,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core";

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File,
  url: SafeUrl
}


@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @Output() files: EventEmitter<any> = new EventEmitter();

  @HostBinding("style.background") private background = "#fff";
  @HostBinding("style.border") private border = "2px dashed #bfbfbf";

  constructor(private sanitizer: DomSanitizer,
    private elementRef: ElementRef) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();

    const dom: HTMLElement = this.elementRef.nativeElement;
    const elements = dom.querySelectorAll('.label-upload')
    elements.forEach((domElement)=>{
      domElement.classList.add('pointer-events');
    })
    this.background = "var(--color-opacity)";
    this.border = "3px dashed var(--dark-color-sidebar)";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#fff";
    this.border = "2px dashed #bfbfbf"
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
    this.border = "2px dashed #bfbfbf";
    this.files.emit({target : evt.dataTransfer, element : evt});

    const dom: HTMLElement = this.elementRef.nativeElement;
    const elements = dom.querySelectorAll('.label-upload')

    elements.forEach((domElement)=>{
      domElement.classList.remove('pointer-events');
    })
   
  }

}
