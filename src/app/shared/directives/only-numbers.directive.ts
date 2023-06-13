import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumbers]'
})
export class OnlyNumbersDirective {

  navigationKeys: Array<string> = ['Backspace'];

  constructor(private el: ElementRef) { }

  
  @Input() OnlyNumber: boolean | undefined;

  @HostListener('keydown', ['$event']) onKeyDown(event : any) {
    /* console.log(event); */
    let e = <KeyboardEvent> event;
      if (
        // Allow: Delete, Backspace, Tab, Escape, Enter, etc
        this.navigationKeys.indexOf(e.key) > -1 || 
        (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
        (e.key === 'ArrowRight') || // Allow: ArrowRight
        (e.key === 'ArrowLeft') || // Allow: ArrowLeft
        (e.key === 'Tab') || // Allow: Ctrl+A
        (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
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
        /* console.log(e.key); */
        e.preventDefault();
      }
    }


}
