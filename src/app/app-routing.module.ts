// ANGULAR
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// COMPONENTS
import {LayoutComponent} from './core/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'hospital', pathMatch: 'full'},
      {path: 'note', loadChildren: () => import('./pages/note/note.module').then(m => m.NoteModule)},
      {path: 'doctor', loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)},
      {path: 'patient', loadChildren: () => import('./pages/patient/patient.module').then(m => m.PatientModule)},
      {path: 'hospital', loadChildren: () => import('./pages/hospital/hospital.module').then(m => m.HospitalModule)},
      {path: 'specialty', loadChildren: () => import('./pages/specialty/specialty.module').then(m => m.SpecialtyModule)}
    ]
  },
  {path: 'auth/login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
