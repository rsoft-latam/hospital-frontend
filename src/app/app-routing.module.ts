import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { authRoutes } from './pages/auth/auth.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/pages/dashboard/dashboard-statistics/dashboard-statistics.module#DashboardStatisticsModule',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/all-in-one',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dashboard/crm',
        loadChildren: 'app/pages/dashboard/dashboard-crm/dashboard-crm.module#DashboardCrmModule'
      },
      {
        path: 'apps/chat',
        loadChildren: 'app/pages/chat/chat.module#ChatModule'
      },
      {
        path: 'components',
        loadChildren: 'app/pages/components/components.module#ComponentsModule'
      },
      {
        path: 'forms',
        loadChildren: 'app/pages/forms/forms.module#FormModule'
      },
      {
        path: 'apps/inbox',
        loadChildren: 'app/pages/inbox/inbox.module#InboxModule'
      },
      {
        path: 'pages/profile',
        loadChildren: 'app/pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'tables/simple-table',
        loadChildren: 'app/pages/tables/simple-table/simple-table.module#SimpleTableModule'
      },
      {
        path: 'tables/table-pagination',
        loadChildren: 'app/pages/tables/table-pagination/table-pagination.module#TablePaginationModule'
      },
      {
        path: 'tables/table-sorting',
        loadChildren: 'app/pages/tables/table-sorting/table-sorting.module#TableSortingModule'
      },
      {
        path: 'tables/table-filtering',
        loadChildren: 'app/pages/tables/table-filtering/table-filtering.module#TableFilteringModule'
      },
      {
        path: 'tables/datatable',
        loadChildren: 'app/pages/tables/datatable/datatable.module#DatatableModule'
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: 'app/pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule'
      },
      {
        path: 'maps/google-maps',
        loadChildren: 'app/pages/google-maps/google-maps.module#GoogleMapsModule'
      },
      {
        path: 'pages/projects',
        loadChildren: 'app/pages/projects/projects.module#ProjectsModule'
      },
      {
        path: 'pages/project-details',
        loadChildren: 'app/pages/project-details/project-details.module#ProjectDetailsModule'
      },
      {
        path: 'material-icons',
        loadChildren: 'app/pages/icon/icon.module#IconModule'
      },
      {
        path: 'editor',
        loadChildren: 'app/pages/editor/editor.module#EditorModule'
      },
      {
        path: 'drag-and-drop',
        loadChildren: 'app/pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
      }
    ]
  },
  {
    path: 'auth',
    children: [
      ...authRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
