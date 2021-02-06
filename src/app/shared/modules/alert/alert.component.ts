import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  template: `
    <div *ngIf="data.type === 'error'">
      <h1 mat-dialog-title>{{data.title ? data.title : data.type}}</h1>
      <div *ngIf="data.message" mat-dialog-content>
        <p>{{data.message}}</p>
      </div>

      <div *ngIf="data.errorArray">
        <div>General Errors</div>
        <div *ngIf="data.errorArray.length > 0" mat-dialog-content>
          <ul>
            <li *ngFor="let err of data.errorArray">{{err}}</li>
          </ul>
        </div>
      </div>

      <div *ngIf="data.errorArrayFields">
        <div *ngIf="data.errorArrayFields.length > 0" mat-dialog-content>
          <div *ngFor="let err of data.errorArrayFields">
            <div>Name Field : {{err[0]}}</div>
            <ul>
              <li *ngFor="let message of err[1].Errors">
                {{message}}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">Cancel</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
      </div>
    </div>

    <div *ngIf="data.type === 'warning'">
      <h1 mat-dialog-title>{{data.title ? data.title : data.type}}</h1>
      <div mat-dialog-content>
        <p>{{data.message}}</p>
      </div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">Cancel</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
      </div>
    </div>

    <div *ngIf="data.type === 'success'">
      <h1 mat-dialog-title>{{data.title ? data.title : data.type}}</h1>
      <div mat-dialog-content>
        <p>{{data.message}}</p>
      </div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">OK</button>
      </div>
    </div>
  `
})
export class AlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    if (this.data.errorArrayFields) {
      this.data.errorArrayFields = Object.entries(this.data.errorArrayFields);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
