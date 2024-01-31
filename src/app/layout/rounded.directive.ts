import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective {

  constructor(elementRef : ElementRef, render: Renderer2) {
    console.log("Directiva",elementRef);
    render.setStyle(elementRef.nativeElement,"border-radius","5px");
    render.setStyle(elementRef.nativeElement,"background-color","#ab2323");
    render.setStyle(elementRef.nativeElement,"margin","10px")
   }
  
}
