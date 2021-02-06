import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'elastic-toolbar-alpha',
  template: `
    <div class="toolbar" fxLayout="row">

      <div fxLayout="row" fxLayoutAlign="start center" fxHide.gt-sm>
        <button type="button" mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>

      <div class="logo-contrast" *ngIf="sidenavCollapsed"
           fxLayout="row" fxLayoutAlign="start center" fxHide fxShow.gt-sm>
        <img class="logo" alt="logo" src="assets/img/logo_dark2x.png">
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
export class ToolbarAlphaComponent implements OnInit {

  @Input() sidenavCollapsed: boolean;
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
