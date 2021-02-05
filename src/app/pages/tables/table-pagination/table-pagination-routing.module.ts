import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TablePaginationComponent } from './table-pagination.component';

const routes: Routes = [
  {
    path: '',
    component: TablePaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePaginationRoutingModule { }
