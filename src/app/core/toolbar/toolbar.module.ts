import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarUserButtonComponent } from './toolbar-user-button/toolbar-user-button.component';
import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolbarAlphaComponent } from './toolbar-alpha/toolbar-alpha.component';
import { ToolbarBetaComponent } from './toolbar-beta/toolbar-beta.component';
import { SearchComponent } from './search/search.component';
import { ToolbarGammaComponent } from './toolbar-gamma/toolbar-gamma.component';
import { ToolbarNavigationComponent } from './toolbar-navigation/toolbar-navigation.component';
import { ToolbarNavigationItemComponent } from './toolbar-navigation/toolbar-navigation-item/toolbar-navigation-item.component';
import {
  ToolbarNavigationDropdownItemComponent
} from './toolbar-navigation/toolbar-navigation-item/toolbar-navigation-dropdown-item/toolbar-navigation-dropdown-item.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollbarModule } from '../scrollbar/scrollbar.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    ScrollbarModule,
    MatInputModule,
    MatMenuModule,
    UtilsModule,
    MatRippleModule
  ],
  declarations: [
    ToolbarUserButtonComponent,
    ToolbarNotificationsComponent,
    SearchBarComponent,
    ToolbarAlphaComponent,
    ToolbarBetaComponent,
    SearchComponent,
    ToolbarGammaComponent,
    ToolbarNavigationComponent,
    ToolbarNavigationItemComponent,
    ToolbarNavigationDropdownItemComponent
  ],
  exports: [
    ToolbarUserButtonComponent,
    ToolbarNotificationsComponent,
    SearchBarComponent,
    ToolbarAlphaComponent,
    ToolbarBetaComponent,
    SearchComponent,
    ToolbarGammaComponent,
    ToolbarNavigationComponent,
    ToolbarNavigationItemComponent,
    ToolbarNavigationDropdownItemComponent
  ]
})
export class ToolbarModule { }
