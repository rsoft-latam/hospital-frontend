import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapsRoutingModule { }
