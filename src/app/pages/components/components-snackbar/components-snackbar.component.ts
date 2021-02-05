import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'elastic-components-snackbar',
  templateUrl: './components-snackbar.component.html'
})
export class ComponentsSnackbarComponent implements OnInit {

  snackbarHTML: string = escape(`<button md-button (click)="openSnackbar()">Trigger Snackbar</button>`);
  snackbarTS: string = escape(
`this.snackBar.open(
  'I\'m a notification!',
  'Close', {
  duration: 3000
});`);

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open('I\'m a notification!', 'Close', {
      duration: 3000
    } as MatSnackBarConfig);
  }

}
