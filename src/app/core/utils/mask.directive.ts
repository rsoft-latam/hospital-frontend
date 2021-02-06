// ANGULAR
import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: 'input[mask]'
})

export class MaskDirective implements OnInit {

  @Input() positive: boolean;
  @Input() decimal: boolean;

  @HostListener('keydown', ['$event'])
  public onKeyDown(e: any): void {
    const input = e.target as HTMLInputElement;

    if (this.positive && parseFloat(input.value) < 0) {
      input.value = '';
    }

    if (!this.decimal) {
      e.key === '.' ? input.value = '' : '';
      input.value = parseFloat(input.value).toFixed(0);
    }

  }

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {

  }

}
