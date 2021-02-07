import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationComponent} from './information.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {AgGridModule} from 'ag-grid-angular';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    AgGridModule.withComponents([])
  ],
  declarations: [InformationComponent],
  exports: [InformationComponent]
})
export class InformationModule {
}
