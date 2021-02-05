import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import escape from 'lodash-es/escape';

@Component({
  selector: 'elastic-components-dialog',
  templateUrl: './components-dialog.component.html'
})
export class ComponentsDialogComponent {

  dialogRef: MatDialogRef<ComponentsDialogDemoDialogComponent>;
  result: string;

  dialogHTML: string = escape(`
  <button md-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
  <p *ngIf="result">You chose: {{ result }}</p>
  `);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialogRef = this.dialog.open(ComponentsDialogDemoDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.result = result;
      this.dialogRef = null;
    });
  }

}

@Component({
  selector: 'elastic-component-dialog-demo-dialog',
  template: `
  <h1>Would you like to order pizza?</h1>
  <mat-dialog-actions align="end">
    <button mat-button (click)="dialogRef.close('No!')">No</button>
    <button mat-button color="primary" (click)="dialogRef.close('Yes!')">Yes</button>
  </mat-dialog-actions>
  `
})
export class ComponentsDialogDemoDialogComponent {
  constructor(public dialogRef: MatDialogRef<ComponentsDialogDemoDialogComponent>) { }
}
