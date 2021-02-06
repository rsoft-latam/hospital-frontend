import {Component, Input, OnInit} from '@angular/core';
import {SidenavItem} from '../../../sidenav/sidenav-item/sidenav-item.model';

@Component({
  selector: 'elastic-toolbar-navigation-item',
  template: `
    <div class="navigation-item-container" *ngIf="item.hasSubItems()" routerLinkActive="dropdown-item-active">
      <a class="navigation-item" fxLayout="row" fxLayoutAlign="start center">
        <span class="badge-stock-toolbar" *ngIf="item.badgeNumber > 0">{{item.badgeNumber}}</span>
        <mat-icon class="icon">{{ item.icon }}</mat-icon>
        <span class="name">{{ item.name }}</span>
      </a>

      <div class="dropdown" *ngIf="item.hasSubItems()">
        <elastic-toolbar-navigation-dropdown-item
          class="dropdown-item-container" *ngFor="let subItem of item.subItems" [item]="subItem"
          [currentlyOpen]="currentlyOpen"></elastic-toolbar-navigation-dropdown-item>
      </div>
    </div>

    <div class="navigation-item-container" *ngIf="!item.hasSubItems()">
      <a [routerLink]="item.route" routerLinkActive="active" [routerLinkActiveOptions]="item.routerLinkActiveOptions"
         class="navigation-item" fxLayout="row" fxLayoutAlign="start center" matRipple>
        <span class="badge-stock-toolbar" *ngIf="item.badgeNumber > 0">{{item.badgeNumber}}</span>
        <mat-icon class="icon">{{ item.icon }}</mat-icon>
        <span class="name">{{ item.name }}</span>
      </a>
    </div>
  `,
  styleUrls: ['./toolbar-navigation-item.component.scss']
})
export class ToolbarNavigationItemComponent implements OnInit {

  @Input('item') item: SidenavItem;
  @Input('currentlyOpen') currentlyOpen: SidenavItem[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
