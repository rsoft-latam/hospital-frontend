// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// MODULES
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
// COMPONENTS
import {AlertComponent} from './alert.component';

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
