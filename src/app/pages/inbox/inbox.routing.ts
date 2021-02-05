import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: InboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
