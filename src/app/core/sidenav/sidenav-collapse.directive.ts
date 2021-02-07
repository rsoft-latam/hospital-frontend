import {Directive, HostBinding, HostListener, Input} from '@angular/core';

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
  onMouseEnter(): any {
    if (this.vrSidenavCollapse) {
      this.open = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): any {
    if (this.vrSidenavCollapse) {
      this.open = false;
    }
  }

  constructor() {
  }

}
