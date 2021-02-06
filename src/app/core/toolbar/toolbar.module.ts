import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarUserButtonComponent} from './toolbar-user-button/toolbar-user-button.component';
import {ToolbarAlphaComponent} from './toolbar-alpha.component';
import {ToolbarBetaComponent} from './toolbar-beta.component';
import {SearchComponent} from './search/search.component';
import {ToolbarGammaComponent} from './toolbar-gamma.component';
import {ToolbarNavigationComponent} from './toolbar-navigation/toolbar-navigation.component';
import {ToolbarNavigationItemComponent} from './toolbar-navigation/toolbar-navigation-item/toolbar-navigation-item.component';
import {
  ToolbarNavigationDropdownItemComponent
} from './toolbar-navigation/toolbar-navigation-item/toolbar-navigation-dropdown-item/toolbar-navigation-dropdown-item.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollbarModule} from '../scrollbar/scrollbar.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UtilsModule} from '../utils/utils.module';
import {ToolbarLayoutComponent} from './toolbar-layout/toolbar-layout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    ScrollbarModule,
    MatInputModule,
    MatMenuModule,
    UtilsModule,
    MatRippleModule
  ],
  declarations: [
    ToolbarUserButtonComponent,
    ToolbarLayoutComponent,
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
    ToolbarLayoutComponent,
    ToolbarAlphaComponent,
    ToolbarBetaComponent,
    SearchComponent,
    ToolbarGammaComponent,
    ToolbarNavigationComponent,
    ToolbarNavigationItemComponent,
    ToolbarNavigationDropdownItemComponent
  ]
})
export class ToolbarModule {
}
