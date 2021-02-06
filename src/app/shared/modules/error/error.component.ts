import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <mat-card style="min-height: 185px;">
      <mat-card-title>
        <span style="font-size: 18px;">{{data?.title}}</span>
      </mat-card-title>

      <mat-card-content fxLayout="column">
        <div *ngIf="data?.message">
          <p>{{data?.message}}</p>
        </div>

        <div *ngIf="data?.generalErrors && data?.generalErrors.length > 0">
          <div>General Errors</div>
          <div>
            <ul>
              <li *ngFor="let err of data?.generalErrors">{{err}}</li>
            </ul>
          </div>
        </div>

        <div *ngIf="data?.fieldErrors && data?.fieldErrors.length > 0">
          <div>
            <div *ngFor="let err of data?.fieldErrors">
              <div>Name Field : {{err[0]}}</div>
              <ul>
                <li *ngFor="let message of err[1].Errors">
                  {{message}}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div *ngIf="data">
          <button mat-raised-button
                  class="pull-right"
                  (click)="onOk()"
                  color="primary"
                  type="button">
            <span>Ok</span>
          </button>
        </div>

      </mat-card-content>
    </mat-card>
  `
})

export class ErrorComponent implements OnInit {

  @Input() data: any;
  @Output() clickOk = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onOk() {
    this.clickOk.emit();
  }
}
