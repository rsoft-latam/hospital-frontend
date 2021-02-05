import { Component, Input, OnInit } from '@angular/core';
import { SidenavItem } from '../../../../sidenav/sidenav-item/sidenav-item.model';
import { Store } from '@ngrx/store';
import { ToggleOpenSidenavItemAction } from '../../../../sidenav/shared/sidenav.action';
import * as fromRoot from '../../../../../reducers/index';

@Component({
  selector: 'elastic-toolbar-navigation-dropdown-item',
  templateUrl: './toolbar-navigation-dropdown-item.component.html',
  styleUrls: ['./toolbar-navigation-dropdown-item.component.scss']
})
export class ToolbarNavigationDropdownItemComponent implements OnInit {

  @Input() item: SidenavItem;
  @Input() currentlyOpen: SidenavItem[] = [ ];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

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
