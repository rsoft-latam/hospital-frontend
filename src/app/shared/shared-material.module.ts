// ANGULAR
import {NgModule} from '@angular/core';
// ANGULAR MATERIAL
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatSortModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatDialogModule,
    MatSliderModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ]
})

export class SharedMaterialModule {
  static forRoot(): any {
    return {
      ngModule: SharedMaterialModule
    };
  }
}
