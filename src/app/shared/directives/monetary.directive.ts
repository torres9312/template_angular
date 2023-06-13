import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[Monetary]'
})
export class MonetaryDirective {

  navigationKeys: Array<string> = ['Backspace'];

  constructor(private el: ElementRef) { }

  
  @Input() monetary: boolean = false;

  @HostListener('keydown', ['$event']) onKeyDown(event : any) {
    /* console.log(event); */
    let e = <KeyboardEvent> event;
      if (
        this.navigationKeys.indexOf(e.key) > -1 || 
        (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
        (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
        (e.key === 'Tab') || // Allow: Tab
        (e.key === '.' ) || // Allow: Punto
        (e.key === ',' ) || // Allow: Coma
        (e.key === 'ArrowLeft') || // Allow: Arrow Left
        (e.key === 'ArrowRight') || // Allow: Arrow Right
        (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
        (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
        (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
        (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
        (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
        (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
      ) {
          return;  // let it happen, don't do anything
      }
      // Ensure that it is a number and stop the keypress
      if (e.key === ' ' || isNaN(Number(e.key))) {
        e.preventDefault();
      }
    }


}
