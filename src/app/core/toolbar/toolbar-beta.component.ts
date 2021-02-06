import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'elastic-toolbar-beta',
  template: `
    <div class="toolbar" fxLayout="row">
      <div class="sidenav-header" fxFlex fxFlex.gt-sm="270px" fxLayout="row" fxLayoutAlign="start center">
        <button class="menu-toggle" type="button" mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>

        <img class="logo" alt="logo" src="assets/img/logo2x.png" fxHide fxShow.gt-sm>
      </div>

      <div fxLayout="row" fxLayoutAlign="end stretch" fxLayoutAlign.gt-sm="space-between stretch" fxFlex>
        <div class="search-bar" fxHide fxShow.gt-sm
             fxLayout="row" fxLayoutAlign="start center" fxFlex fxFlex.gt-md="500px">
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
  `]
})
export class ToolbarBetaComponent implements OnInit {

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
