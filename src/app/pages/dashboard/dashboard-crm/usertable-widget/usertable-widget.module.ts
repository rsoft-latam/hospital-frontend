import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertableWidgetComponent } from './usertable-widget.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [UsertableWidgetComponent],
  exports: [UsertableWidgetComponent]
})
export class UsertableWidgetModule { }
