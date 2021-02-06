import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './validated-input.directive';

@NgModule({
  imports: [CommonModule],
  exports: [TooltipDirective],
  declarations: [TooltipDirective]
})
export class ValidationModule {
}
