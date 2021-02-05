import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsMenuComponent } from './components-menu.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ComponentsMenuComponent],
  exports: [ComponentsMenuComponent]
})
export class ComponentsMenuModule { }
