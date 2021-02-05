import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { UtilsModule } from '../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatRippleModule } from '@angular/material';
import { ComponentsAutocompleteModule } from './components-autocomplete/components-autocomplete.module';
import { ComponentsButtonModule } from './components-button/components-button.module';
import { ComponentsCardModule } from './components-card/components-card.module';
import { ComponentsDialogModule } from './components-dialog/components-dialog.module';
import { ComponentsGridlistModule } from './components-gridlist/components-gridlist.module';
import { ComponentsListModule } from './components-list/components-list.module';
import { ComponentsMenuModule } from './components-menu/components-menu.module';
import { ComponentsSliderModule } from './components-slider/components-slider.module';
import { ComponentsSnackbarModule } from './components-snackbar/components-snackbar.module';
import { ComponentsTooltipModule } from './components-tooltip/components-tooltip.module';
import { ComponentsProgressModule } from './components-progress/components-progress.module';
import { ComponentsRoutingModule } from './components.routing';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    PageHeaderModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatRippleModule,
    MatListModule,
    ComponentsAutocompleteModule,
    ComponentsButtonModule,
    ComponentsCardModule,
    ComponentsDialogModule,
    ComponentsGridlistModule,
    ComponentsListModule,
    ComponentsMenuModule,
    ComponentsProgressModule,
    ComponentsSliderModule,
    ComponentsSnackbarModule,
    ComponentsTooltipModule
  ],
  declarations: [ComponentsComponent]
})
export class ComponentsModule { }
