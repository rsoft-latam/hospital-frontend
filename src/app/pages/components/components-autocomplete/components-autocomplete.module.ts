import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsAutocompleteComponent } from './components-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatCardModule, MatInputModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '../../../core/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,

  ],
  declarations: [ComponentsAutocompleteComponent],
  exports: [ComponentsAutocompleteComponent]
})
export class ComponentsAutocompleteModule { }
