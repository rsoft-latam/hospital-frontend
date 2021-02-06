import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbsComponent} from './breadcrumbs.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {
}
