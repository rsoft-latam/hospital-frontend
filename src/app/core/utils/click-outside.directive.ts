import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[vrClickOutside]'
})
export class ClickOutsideDirective {

  @Output()
  public vrClickOutside = new EventEmitter<any>();

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: any, targetElement: any): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.vrClickOutside.emit(event);
    }
  }

}
