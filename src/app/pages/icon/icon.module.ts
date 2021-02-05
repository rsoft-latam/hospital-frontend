import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { MatIconModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '../../core/utils/utils.module';
import { IconRoutingModule } from './icon.routing';

@NgModule({
  imports: [
    CommonModule,
    IconRoutingModule,
    MatIconModule,
    UtilsModule,
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [IconComponent]
})
export class IconModule { }
