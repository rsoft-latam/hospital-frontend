import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SimpleTableComponent } from './simple-table.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleTableRoutingModule { }
