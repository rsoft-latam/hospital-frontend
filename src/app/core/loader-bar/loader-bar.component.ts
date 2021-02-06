import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoaderBarService} from './loader-bar.service';

class LoaderBarState {
  show: boolean;
}

@Component({
  selector: 'app-loader-bar',
  template: `
    <div [hidden]="!show">
      <div class="loader-overlay">
        <div>
          <mat-progress-bar mode="indeterminate" color="warn" *ngIf="show"></mat-progress-bar>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 1;
      z-index: 500000;
    }
  `]
})
export class LoaderBarComponent implements OnInit, OnDestroy {

  show = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderBarService) {
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderBarState) => this.show = state.show);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
