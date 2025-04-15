import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumeric]'
})
export class OnlyNumericDirective {

  constructor(private ref: ElementRef) { }

  // @HostListener('input', ['$event']) onInput(event) {
  //   const initalValue = this.ref.nativeElement.value;

  //   this.ref.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
  //   if (initalValue !== this.ref.nativeElement.value) {
  //     event.stopPropagation();
  //   }
  // }

}
