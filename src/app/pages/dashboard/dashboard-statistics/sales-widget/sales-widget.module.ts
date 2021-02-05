import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesWidgetComponent } from './sales-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { UtilsModule } from 'app/core/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    UtilsModule
  ],
  declarations: [SalesWidgetComponent],
  exports: [SalesWidgetComponent]
})
export class SalesWidgetModule { }
