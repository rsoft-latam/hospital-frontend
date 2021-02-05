import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuickpanelComponent } from './quickpanel.component';
import { MatButtonModule, MatListModule, MatProgressBarModule, MatTabsModule } from '@angular/material';
import { ScrollbarModule } from '../scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTabsModule,
    MatListModule,
    ScrollbarModule
  ],
  declarations: [QuickpanelComponent],
  exports: [QuickpanelComponent]
})
export class QuickpanelModule { }
