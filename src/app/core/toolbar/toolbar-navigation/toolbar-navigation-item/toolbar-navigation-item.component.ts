import { Component, Input, OnInit } from '@angular/core';
import { SidenavItem } from '../../../sidenav/sidenav-item/sidenav-item.model';

@Component({
  selector: 'elastic-toolbar-navigation-item',
  templateUrl: './toolbar-navigation-item.component.html',
  styleUrls: ['./toolbar-navigation-item.component.scss']
})
export class ToolbarNavigationItemComponent implements OnInit {

  @Input('item') item: SidenavItem;
  @Input('currentlyOpen') currentlyOpen: SidenavItem[] = [];

  constructor() { }

  ngOnInit() {
  }
}
