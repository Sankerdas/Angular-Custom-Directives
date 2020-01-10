import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'skyblue';
   }

}
