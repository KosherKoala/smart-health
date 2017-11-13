import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard , NoAuthGuard, HistoryGuard} from '../shared';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
          //  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' },
            { path: 'doctor/:id', loadChildren: './doctor-page/doctor-page.module#DoctorPageModule' },
            { path: 'patient/:id', loadChildren: './patient-page/patient-page.module#PatientPageModule', canActivate: [HistoryGuard] },
            { path: '', redirectTo: 'dashboard'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
