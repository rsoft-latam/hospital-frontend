import {Component, Input, OnInit} from '@angular/core';
import {SidenavItem} from '../../../../sidenav/sidenav-item/sidenav-item.model';
import {Store} from '@ngrx/store';
import {ToggleOpenSidenavItemAction} from '../../../../sidenav/shared/sidenav.action';
import * as fromRoot from '../../../../../reducers/index';

@Component({
  selector: 'elastic-toolbar-navigation-dropdown-item',
  template: `
    <a [routerLink]="item.route" routerLinkActive="active"
       class="dropdown-item" *ngIf="!item.hasSubItems()"
       fxLayout="row" fxLayoutAlign="space-between center" matRipple>
      <span class="name">{{ item.name }}</span>
      <span fxFlex></span>
      <span class="badge-stock" style="right: 10px;" *ngIf="item.badgeNumber > 0">{{item.badgeNumber}}</span>
      <div class="letter-icon">{{ item.generateLetterIcon() }}</div>
    </a>

    <a class="dropdown-item" *ngIf="item.hasSubItems()" (click)="toggleDropdown()"
       fxLayout="row" fxLayoutAlign="space-between center" matRipple>
      <span class="name">{{ item.name }}</span>
      <span fxFlex></span>
      <mat-icon *ngIf="item.hasSubItems()" class="dropdown-indicator" [class.rotate]="isOpen(item)">expand_more</mat-icon>
      <span class="badge-stock" style="right: 10px;" *ngIf="item.badgeNumber > 0">{{item.badgeNumber}}</span>
      <div class="letter-icon">{{ item.generateLetterIcon() }}</div>
    </a>

    <div class="sub-menu" [style.height]="getSubMenuHeight()">
      <elastic-toolbar-navigation-dropdown-item
        class="dropdown-item-container" *ngFor="let subItem of item.subItems" [item]="subItem"
        [currentlyOpen]="currentlyOpen"></elastic-toolbar-navigation-dropdown-item>
    </div>
  `,
  styleUrls: ['./toolbar-navigation-dropdown-item.component.scss']
})
export class ToolbarNavigationDropdownItemComponent implements OnInit {

  @Input() item: SidenavItem;
  @Input() currentlyOpen: SidenavItem[] = [];

  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    if (this.item.hasSubItems()) {
      this.store.dispatch(new ToggleOpenSidenavItemAction(this.item));
    }
  }

  isOpen(item: SidenavItem) {
    return this.currentlyOpen.indexOf(item) > -1;
  }

  // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
  getSubMenuHeight(): string {
    return (this.getSubMenuItemsCount(this.item) * 48) + 'px';
  }

  // Counts the amount of Sub Items there is and returns the count.
  getSubMenuItemsCount(item: SidenavItem): number {
    let count = 0;

    if (item.hasSubItems() && this.isOpen(item)) {
      count += item.subItems.length;

      item.subItems.forEach((subItem) => {
        count += this.getSubMenuItemsCount(subItem);
      });
    }

    return count;
  }
}
