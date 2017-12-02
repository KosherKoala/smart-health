import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard , NoAuthGuard} from './shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [NoAuthGuard] },
    // { path: 'doctor-portal', loadChildren: './doctor-portal/doctor-portal.module#DoctorPortalModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule', canActivate: [NoAuthGuard] },
    { path: 'doctor-registration', loadChildren: './doctor-registration/doctor-registration.module#DoctorRegistrationModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
