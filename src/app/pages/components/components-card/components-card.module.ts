import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsCardComponent } from './components-card.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [ComponentsCardComponent],
  exports: [ComponentsCardComponent]
})
export class ComponentsCardModule { }
