import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteHandlerComponent} from './route-handler.component';
import {RouterModule} from '@angular/router';
import {LoaderBarModule} from '../loader-bar/loader-bar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoaderBarModule
  ],
  declarations: [RouteHandlerComponent],
  exports: [RouteHandlerComponent]
})
export class RouteHandlerModule {
}
