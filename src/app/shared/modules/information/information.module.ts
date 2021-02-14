// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// MODULES
import {AgGridModule} from 'ag-grid-angular';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
// COMPONENTS
import {InformationComponent} from './information.component';

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
