import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationService, HealthService, InsuranceService, HistoryService  } from '../services';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    providers: [AuthenticationService, HealthService, InsuranceService, HistoryService]
})
export class LoginModule {
}
