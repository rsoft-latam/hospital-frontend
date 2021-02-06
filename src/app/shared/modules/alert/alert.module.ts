import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class AlertModule {
}
