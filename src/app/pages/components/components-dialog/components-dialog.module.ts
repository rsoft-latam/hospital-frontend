import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDialogComponent, ComponentsDialogDemoDialogComponent } from './components-dialog.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatDialogModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ComponentsDialogDemoDialogComponent],
  declarations: [ComponentsDialogComponent, ComponentsDialogDemoDialogComponent],
  exports: [ComponentsDialogComponent]
})
export class ComponentsDialogModule { }

