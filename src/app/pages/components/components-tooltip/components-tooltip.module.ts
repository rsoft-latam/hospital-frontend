import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsTooltipComponent } from './components-tooltip.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ComponentsTooltipComponent],
  exports: [ComponentsTooltipComponent]
})
export class ComponentsTooltipModule { }
