import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {

  @Input() defaultColor: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) {
   }

   ngOnInit() {
     if(this.defaultColor){
       this.setBgColor(this.defaultColor);
     } else {
       this.setBgColor('white');
     }
   }


   setBgColor(color: string) {
     this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.setBgColor('orange');
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.setBgColor('yellow');
   }

}
