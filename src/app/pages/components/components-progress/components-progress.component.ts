import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';

@Component({
  selector: 'elastic-components-progress',
  templateUrl: './components-progress.component.html',
  styleUrls: ['./components-progress.component.scss']
})
export class ComponentsProgressComponent implements OnInit {

  color = 'accent';
  mode = 'indeterminate';
  progressValue = 50;
  bufferValue = 75;

  spinnerColor = 'accent';
  spinnerMode = 'indeterminate';
  spinnerValue = 50;

  progressbarHTML = escape(
`<section fxLayout="row" fxLayoutAlign="start center">
  <div class="margin">Color:</div>
  <md-radio-group [(ngModel)]="color">
    <md-radio-button class="margin" value="primary">
      Primary
    </md-radio-button>
    <md-radio-button class="margin" value="accent">
      Accent
    </md-radio-button>
    <md-radio-button class="margin" value="warn">
      Warn
    </md-radio-button>
  </md-radio-group>
</section>

<section fxLayout="row" fxLayoutAlign="start center">
  <div class="margin">Mode:</div>
  <md-radio-group [(ngModel)]="mode">
    <md-radio-button class="margin" value="determinate">
      Determinate
    </md-radio-button>
    <md-radio-button class="margin" value="indeterminate">
      Indeterminate
    </md-radio-button>
    <md-radio-button class="margin" value="buffer">
      Buffer
    </md-radio-button>
    <md-radio-button class="margin" value="query">
      Query
    </md-radio-button>
  </md-radio-group>
</section>

<section fxLayout="row" fxLayoutAlign="start center" *ngIf="mode == 'determinate' || mode == 'buffer'">
  <div class="margin">Progress:</div>
  <md-slider class="margin" [(ngModel)]="progressValue"></md-slider>
</section>
<section fxLayout="row" fxLayoutAlign="start center" *ngIf="mode == 'buffer'">
  <div class="margin">Buffer:</div>
  <md-slider class="margin" [(ngModel)]="bufferValue"></md-slider>
</section>

<section fxLayout="row" fxLayoutAlign="start center">
  <md-progress-bar
    class="margin"
    [color]="color"
    [mode]="mode"
    [value]="progressValue"
    [bufferValue]="bufferValue">
  </md-progress-bar>
</section>`);

  progressSpinnerHTML = escape(
`<section fxLayout="row" fxLayoutAlign="start center">
  <label class="margin">Color:</label>
  <md-radio-group [(ngModel)]="spinnerColor">
    <md-radio-button class="margin" value="primary">
      Primary
    </md-radio-button>
    <md-radio-button class="margin" value="accent">
      Accent
    </md-radio-button>
    <md-radio-button class="margin" value="warn">
      Warn
    </md-radio-button>
  </md-radio-group>
</section>

<section fxLayout="row" fxLayoutAlign="start center">
  <label class="margin">Mode:</label>
  <md-radio-group [(ngModel)]="spinnerMode">
    <md-radio-button class="margin" value="determinate">
      Determinate
    </md-radio-button>
    <md-radio-button class="margin" value="indeterminate">
      Indeterminate
    </md-radio-button>
  </md-radio-group>
</section>

<section fxLayout="row" fxLayoutAlign="start center" *ngIf="spinnerMode == 'determinate'">
  <label class="margin">Progress:</label>
  <md-slider class="margin" [(ngModel)]="spinnerValue"></md-slider>
</section>

<div fxLayout="row" fxLayoutAlign="center center">
  <md-progress-spinner
    class="margin"
    [color]="spinnerColor"
    [mode]="spinnerMode"
    [value]="spinnerValue">
  </md-progress-spinner>
</div>`);

  constructor() { }

  ngOnInit() {
  }

}
