import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard , NoAuthGuard, HistoryGuard, DoctorGuard, PatientGuard} from '../shared';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [PatientGuard] },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule',
                canActivate: [] },
            {
                path: 'doctor/:id',
                loadChildren: './doctor-page/doctor-page.module#DoctorPageModule',
                canActivate: [ PatientGuard]
            },
            {
                path: 'patient/:id',
                loadChildren: './patient-page/patient-page.module#PatientPageModule',
                canActivate: [ DoctorGuard, HistoryGuard]
            },
            { path: '', redirectTo: 'dashboard'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
