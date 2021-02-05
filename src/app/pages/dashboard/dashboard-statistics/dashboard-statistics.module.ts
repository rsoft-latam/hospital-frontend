import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStatisticsComponent } from './dashboard-statistics.component';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateWidgetModule } from './state-widget/state-widget.module';
import { BarchartWidgetModule } from './barchart-widget/barchart-widget.module';
import { AreachartWidgetModule } from './areachart-widget/areachart-widget.module';
import { RecentsalesWidgetModule } from './recentsales-widget/recentsales-widget.module';
import { AdvancedPieChartWidgetModule } from './advanced-pie-chart-widget/advanced-pie-chart-widget.module';
import { MarketWidgetModule } from '../dashboard-crm/market-widget/market-widget.module';
import { MapsWidgetModule } from './maps-widget/maps-widget.module';
import { SalesWidgetModule } from './sales-widget/sales-widget.module';
import { ProjectWidgetModule } from '../dashboard-crm/project-widget/project-widget.module';
import { DashboardStatisticsRoutingModule } from './dashboard-statistics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardStatisticsRoutingModule,
    PageHeaderModule,
    BreadcrumbsModule,

    FlexLayoutModule,

    // Widgets
    StateWidgetModule,
    BarchartWidgetModule,
    AreachartWidgetModule,
    RecentsalesWidgetModule,
    AdvancedPieChartWidgetModule,
    MarketWidgetModule,
    MapsWidgetModule,
    SalesWidgetModule,
    ProjectWidgetModule
  ],
  declarations: [DashboardStatisticsComponent],
  exports: [DashboardStatisticsComponent]
})
export class DashboardStatisticsModule { }
