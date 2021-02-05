import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatGridListModule, MatTabsModule } from '@angular/material';
import { ComponentsGridlistComponent } from './components-gridlist.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: [ComponentsGridlistComponent],
  exports: [ComponentsGridlistComponent]
})
export class ComponentsGridlistModule { }
