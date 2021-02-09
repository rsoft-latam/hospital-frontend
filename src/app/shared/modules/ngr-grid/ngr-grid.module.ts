import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgrGridComponent} from './ngr-grid.component';
import {MatButtonModule} from '@angular/material/button';
import {AgGridModule} from 'ag-grid-angular';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {SharedActionsTableModule} from '../../shared-actions-table.module';
import {ActionButtonComponent} from '../../components/action-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    SharedActionsTableModule,
    AgGridModule.withComponents([ActionButtonComponent])
  ],
  declarations: [NgrGridComponent],
  exports: [NgrGridComponent]
})

export class NgrGridModule {
}
