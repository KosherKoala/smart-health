import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorPortalComponent } from './doctor-portal.component';

const routes: Routes = [
  { path: '', component: DoctorPortalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorPortalRoutingModule { }
