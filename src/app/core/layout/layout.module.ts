import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SidenavModule} from '../sidenav/sidenav.module';
import {ToolbarModule} from '../toolbar/toolbar.module';
import {RouterModule} from '@angular/router';
import {ScrollbarService} from '../scrollbar/scrollbar.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    SidenavModule,
    ToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [ScrollbarService]
})
export class LayoutModule {
}
