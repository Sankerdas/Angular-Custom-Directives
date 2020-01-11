import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    render.setStyle(elementRef.nativeElement, 'backgroundColor', 'orange')
   }

}
