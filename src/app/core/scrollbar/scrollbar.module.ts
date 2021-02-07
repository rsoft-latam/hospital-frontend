import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollbarComponent} from './scrollbar.component';
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
