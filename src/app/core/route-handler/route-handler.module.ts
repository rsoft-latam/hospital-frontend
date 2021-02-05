import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteHandlerComponent } from './route-handler.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RouteHandlerComponent],
  exports: [RouteHandlerComponent]
})
export class RouteHandlerModule { }
