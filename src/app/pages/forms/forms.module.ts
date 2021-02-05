import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule, MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../../core/utils/utils.module';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { FormsRoutingModule } from './forms.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    PageHeaderModule
  ],
  declarations: [
    FormElementsComponent,
    FormWizardComponent
  ]
})
export class FormModule { }
