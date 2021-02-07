import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationComponent} from './information.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    AgGridModule.withComponents([])
  ],
  declarations: [InformationComponent],
  exports: [InformationComponent]
})
export class InformationModule {
}
