import { AfterViewChecked, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dinamyc]'
})
export class TranformSelectDirective  implements AfterViewChecked {

    //STYLE SELECT ANIMATION

    @Input() select:any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {    
        if(this.el.nativeElement.value != ''){
            this.el.nativeElement.nextSibling.classList.add('tranform-input');
        }
    }

    @HostListener('change', ['$event'])
    onChange(event: any) {
        if (event.target.value != "") {    
            event.target.nextElementSibling.classList.add("transform-input");
        }else{
            event.target.nextElementSibling.classList.remove("transform-input");
        }
    }


}