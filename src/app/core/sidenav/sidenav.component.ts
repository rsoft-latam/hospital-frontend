import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SidenavItem } from './sidenav-item/sidenav-item.model';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'elastic-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input('layout') layout: string; // Layout
  @Input('collapsed') collapsed: boolean;
  @Output('toggledSidenavCollapse') toggledSidenavCollapse = new EventEmitter();

  sidenavItems$: Observable<SidenavItem[]>;
  currentlyOpen$: Observable<SidenavItem[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.sidenavItems$ = this.store.select(fromRoot.getSidenavItems);
    this.currentlyOpen$ = this.store.select(fromRoot.getSidenavCurrentlyOpen);
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }

  ngOnDestroy() {
  }
}
