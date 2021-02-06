import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'hospital', loadChildren: () => import('./pages/hospital/hospital.module').then(m => m.HospitalModule), pathMatch: 'full'},
      {path: 'doctor', loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)},
      {path: 'hospital', loadChildren: () => import('./pages/hospital/hospital.module').then(m => m.HospitalModule)},
      {path: 'patient', loadChildren: () => import('./pages/patient/patient.module').then(m => m.PatientModule)},
      {path: 'specialty', loadChildren: () => import('./pages/specialty/specialty.module').then(m => m.SpecialtyModule)},
      {path: 'note', loadChildren: () => import('./pages/note/note.module').then(m => m.NoteModule)}
    ]
  },
  {path: 'auth/login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'signin-oidc', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
