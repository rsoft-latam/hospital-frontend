import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[vrSidenavCollapse]'
})
export class SidenavCollapseDirective {

  @HostBinding('class.sidenav-collapsed')
  @Input('vrSidenavCollapse')
  vrSidenavCollapse = true;

  @HostBinding('class.open')
  open: boolean;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.vrSidenavCollapse) {
      this.open = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.vrSidenavCollapse) {
      this.open = false;
    }
  }

  constructor() { }

}
