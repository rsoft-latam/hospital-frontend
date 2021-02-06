import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoaderBarComponent} from './loader-bar.component';
import {LoaderBarService} from './loader-bar.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  declarations: [LoaderBarComponent],
  exports: [LoaderBarComponent],
  providers: [LoaderBarService]
})
export class LoaderBarModule {
}
