import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService, PatientService, HealthService, InsuranceService } from '../services';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        FormsModule,
        NgbModule,
    ],
    providers: [ UserService, PatientService, HealthService, InsuranceService ],
    declarations: [RegistrationComponent]
})
export class RegistrationModule {
}
