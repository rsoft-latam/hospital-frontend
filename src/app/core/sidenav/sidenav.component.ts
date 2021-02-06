import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidenavItem} from './sidenav-item/sidenav-item.model';
import {Observable, Subscription} from 'rxjs';
import * as fromRoot from '../../reducers/index';
import {ActionsSubject, Store} from '@ngrx/store';
import {filter, tap} from 'rxjs/operators';
import * as sidenav from '../../core/sidenav/shared/sidenav.action';
import * as fromSidenav from './shared/sidenav.action';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input('layout') layout: string; // Layout
  @Input('collapsed') collapsed: boolean;
  @Output('toggledSidenavCollapse') toggledSidenavCollapse = new EventEmitter();

  sidenavItems$: Observable<SidenavItem[]>;
  currentlyOpen$: Observable<SidenavItem[]>;
  currentlyBadgesSubs: Subscription;
  currentlyBadges$ = this.store.select(fromRoot.getSidenavCurrentlyNavPoints);
  actionSubs: Subscription;

  currentItems: SidenavItem[] = [];

  constructor(private store: Store<fromRoot.State>,
              private actions: ActionsSubject) {
  }

  ngOnInit() {

    this.store.dispatch(new fromSidenav.NavAction());

    this.sidenavItems$ = this.store.select(fromRoot.getSidenavItems);
    this.currentlyOpen$ = this.store.select(fromRoot.getSidenavCurrentlyOpen);
    this.sidenavItems$.pipe(tap(currentItemsData => this.currentItems = currentItemsData)).subscribe();


    this.currentlyBadgesSubs = this.currentlyBadges$.pipe(
      tap((data: any[]) => {
        if (data.length > 0) {
          const arrayAux: SidenavItem[] = [];
          (Object.assign([], this.currentItems)).map((s: any) =>
            arrayAux.push(new SidenavItem(
              {
                ...s,
                'subItems': Object.assign([], s.subItems)
              }
            ))
          );
          this.setBadgeNumber(data, arrayAux);
          this.store.dispatch(new sidenav.SetSidenavItemsAction(arrayAux));
        }
      })).subscribe();
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }

  setBadgeNumber(itemsBagdes: any[], items: SidenavItem[]) {
    if (items.length > 0) {
      items.map(
        nav => {
          const nameNav = this.getName(nav.parent ? nav.parent.name.toLowerCase() + '.' + nav.name.toLowerCase() : nav.name.toLowerCase());
          const index = itemsBagdes.map(item => item.Path).indexOf(nameNav);
          if (index > -1) {
            nav.badgeNumber = itemsBagdes[index].Badge;
          }
          if (nav.hasSubItems()) {
            this.setBadgeNumber(itemsBagdes, nav.subItems);
          }
        }
      );
    }
  }

  getName(name: string) {
    switch (name) {
      case 'amazon':
        return 'amzn';
      case 'amazon.mapping':
        return 'amzn.mapping';
      case 'repricer':
        return 'repricer';
      case 'repricer.items & stock':
        return 'repricer.pricing';
      case 'repricer.status':
        return 'repricer.status';
      case 'crawler':
        return 'crawler';
      case 'crawler.search links':
        return 'crawler.link';
      case 'crawler.crawler results':
        return 'crawler.product';
      case 'core data':
        return 'core';
      case 'core data.products':
        return 'core.product';
      case 'usrmgmt':
        return 'usrmgmt';
      case 'list':
        return 'usrmgmt.list';
      default:
        return null;
    }
  }
}
