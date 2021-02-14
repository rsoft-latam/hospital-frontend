// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// COMPONENTS
import {ScrollbarComponent} from './scrollbar.component';
// SERVICES
import {ScrollbarService} from './scrollbar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollbarComponent
  ],
  providers: [
    ScrollbarService
  ],
  exports: [
    ScrollbarComponent
  ]

})

export class ScrollbarModule {
}
