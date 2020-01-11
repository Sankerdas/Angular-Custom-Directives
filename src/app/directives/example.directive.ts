import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.setBgColor('aqua')
   }

   setBgColor(color: string) {
     this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', color)
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.setBgColor('orange')
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.setBgColor('yellow')
   }

}
