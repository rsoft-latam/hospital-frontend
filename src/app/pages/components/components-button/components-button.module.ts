import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsButtonComponent } from './components-button.component';
import { UtilsModule } from '../../../core/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  declarations: [ComponentsButtonComponent],
  exports: [ComponentsButtonComponent]
})
export class ComponentsButtonModule { }
