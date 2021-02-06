import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'elastic-toolbar-gamma',
  template: `
    <div class="toolbar" id="header">
      <div class="container" fxLayout="row" fxLayoutAlign="space-between">
        <div class="sidenav-header" fxLayout="row" fxLayoutAlign="start center">
          <button fxShow fxHide.gt-sm class="menu-toggle-mobile" type="button" mat-icon-button (click)="toggleSidenav()">
            <mat-icon>menu</mat-icon>
          </button>

          <a fxHide fxShow.gt-xs [routerLink]="['/']">
            <img class="logo" alt="logo" src="assets/img/logo2x.png">
          </a>
        </div>

        <div class="search-bar" fxHide fxShow.gt-sm
             fxLayout="row" fxLayoutAlign="start center" fxFlex="450px" fxFlexOffset.gt-sm="36px">
        </div>

        <div fxLayout="row" fxFlexOffset.gt-sm="24px" style="margin-right: 25px;">
          <elastic-toolbar-layout></elastic-toolbar-layout>
          <elastic-toolbar-user-button></elastic-toolbar-user-button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      z-index: 500;
    }

    .container {
      height: 64px;
    }
  `]
})
export class ToolbarGammaComponent implements OnInit {

  @Input() quickpanelOpen: boolean;

  @Output() toggledSidenav = new EventEmitter();
  @Output() toggledQuickpanel = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.toggledSidenav.emit();
  }
}
