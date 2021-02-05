import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
