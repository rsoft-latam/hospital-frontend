import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSliderComponent } from './components-slider.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatSliderModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule
  ],
  declarations: [ComponentsSliderComponent],
  exports: [ComponentsSliderComponent]
})
export class ComponentsSliderModule { }
