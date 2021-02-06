import {Component, OnDestroy, OnInit} from '@angular/core';
import {LIST_FADE_ANIMATION} from '../../utils/list.animation';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {takeUntil} from 'rxjs/operators';
import {componentDestroyed} from '../../utils/component-destroyed';
import * as layout from '../../layout/shared/layout.action';
import {MatRadioChange} from '@angular/material/radio';

@Component({
  selector: 'elastic-toolbar-layout',
  template: `
    <div class="toolbar-button" fxLayout="row" fxLayoutAlign="start center" (vrClickOutside)="onClickOutside()">
      <button class="icon-button" type="button" mat-button (click)="toggleDropdown()" [class.open]="isOpen">
        <mat-icon class="icon">settings</mat-icon>
      </button>

      <div class="dropdown mat-elevation-z1" [class.open]="isOpen">
        <div class="card">
          <div class="header" fxLayout="row" fxLayoutAlign="space-between center">
            <div class="title">
              <div class="name">Layouts:</div>
            </div>
          </div>

          <div class="content">

            <mat-radio-group class="layout-radio-group notification" (change)="setLayout($event)" fxLayout="column"
                             fxLayoutGap="24px">
              <mat-radio-button value="alpha">
                <img style="width: 100px; height: 80px;" src="assets/img/demo/settings/layout_alpha.png">
              </mat-radio-button>
              <mat-radio-button value="beta">
                <img style="width: 100px; height: 80px;" src="assets/img/demo/settings/layout_beta.png">
              </mat-radio-button>
              <mat-radio-button value="gamma">
                <img style="width: 100px; height: 80px;" src="assets/img/demo/settings/layout_gamma.png">
              </mat-radio-button>
            </mat-radio-group>

          </div>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./toolbar-layout.component.scss'],
  animations: [...LIST_FADE_ANIMATION]
})
export class ToolbarLayoutComponent implements OnInit, OnDestroy {

  isOpen: boolean;
  cardElevationClass: string;

  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    this.store.select(fromRoot.getCardElevation).pipe(
      takeUntil(componentDestroyed(this))
    ).subscribe((elevation) => {
      this.cardElevationClass = elevation;
    });
  }

  setLayout(radioEvent: MatRadioChange) {
    this.store.dispatch(new layout.SelectLayoutAction(radioEvent.value));
  }

  ngOnDestroy() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
