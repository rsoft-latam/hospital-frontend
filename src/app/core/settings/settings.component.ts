import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as layout from '../layout/shared/layout.action';
import { MatRadioChange, MatSelectChange } from '@angular/material';
import { componentDestroyed } from '../utils/component-destroyed';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'elastic-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

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

  setCardElevation(selectEvent: MatSelectChange) {
    this.store.dispatch(new layout.SetCardElevationAction(selectEvent.value));
  }

  ngOnDestroy() {
  }
}
