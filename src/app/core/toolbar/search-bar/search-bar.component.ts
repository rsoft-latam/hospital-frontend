import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidenavItem } from '../../sidenav/sidenav-item/sidenav-item.model';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/index';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'elastic-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  input: string;

  @ViewChild('inputElem') inputElem: ElementRef;
  focused: boolean;

  recentlyVisited: SidenavItem[] = [];
  frequentlyVisited: SidenavItem[] = [];
  sidenavItems: SidenavItem[] = [];
  searchResult: SidenavItem[] = [];

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.store.select(fromRoot.getSidenavItems).pipe(
      filter(Boolean)
    ).subscribe((items) => {
      this.sidenavItems = items;
      this.setupDemoData();
      this.cd.markForCheck();
    });

    fromEvent(this.inputElem.nativeElement, 'keyup').pipe(
      distinctUntilChanged()
    ).subscribe(() => {
      if (this.inputElem.nativeElement.value !== '') {
        this.searchResult = this.sidenavItems.filter(item => item.name.toLowerCase().includes(this.inputElem.nativeElement.value));
        this.cd.markForCheck();
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        const item = this.findByRouteRecursive(event.urlAfterRedirects);

        const index = this.recentlyVisited.indexOf(item);
        if (index > -1) {
          this.recentlyVisited.splice(index, 1);
        }

        this.recentlyVisited.unshift(item);

        if (this.recentlyVisited.length > 5) {
          this.recentlyVisited.pop();
        }

        this.cd.markForCheck();
      }

    });
  }

  setupDemoData() {
    // Start Demo Data - You can safely remove this
    const homepage = this.findByRouteRecursive('/');
    if (homepage) this.frequentlyVisited.push(homepage);

    const allInOneTable = this.findByRouteRecursive('/tables/all-in-one-table');
    if (allInOneTable) this.frequentlyVisited.push(allInOneTable);

    const chat = this.findByRouteRecursive('/apps/chat');
    if (chat) this.frequentlyVisited.push(chat);

    const tablePagination = this.findByRouteRecursive('/tables/table-pagination');
    if (tablePagination) this.frequentlyVisited.push(tablePagination);

    const formElements = this.findByRouteRecursive('/forms/form-elements');
    if (formElements) this.frequentlyVisited.push(formElements);

    const formWizard = this.findByRouteRecursive('/forms/form-wizard');
    if (formWizard) this.recentlyVisited.push(formWizard);

    const inbox = this.findByRouteRecursive('/apps/inbox');
    if (inbox) this.recentlyVisited.push(inbox);

    const tableSorting = this.findByRouteRecursive('/tables/table-sorting');
    if (tableSorting) this.recentlyVisited.push(tableSorting);

    const editor = this.findByRouteRecursive('/editor');
    if (editor) this.recentlyVisited.push(editor);

    const googleMaps = this.findByRouteRecursive('/maps/google-maps');
    if (googleMaps) this.recentlyVisited.push(googleMaps);
    // End Demo Data - You can safely remove this
  }

  findByRouteRecursive(route: string, collection: SidenavItem[] = this.sidenavItems): SidenavItem | null {
    let result = collection.find(item => item.route === route);

    if (!result) {
      collection.forEach(item => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems || []);

          if (found) {
            result = found;
            return false;
          }
        }
      });
    }

    return result;
  }

  openDropdown() {
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }
}
