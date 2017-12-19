import { ElementRef, HostListener, Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][appNumberMask]'
})
export class NumberMaskDirective {
  constructor(
    private el: ElementRef,
    public model: NgControl
  ) { }

  @HostListener('input', ['$event']) onEvent($event: any) {
    let i = this.el.nativeElement.value.replace(/\D/g, '').trim();
    let out: any;
    if (i === '') {
      out = '';
    } else {
      out = i.match(/(\d+)/)[1].split('').reverse()
        .join('').replace(/(\d\d\d)/g, '$1').split('').reverse().join('');
    }
    this.model.control.setValue(out);
  }
}
