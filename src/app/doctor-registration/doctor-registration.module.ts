import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService, InsuranceService, DoctorService, CalendarService } from '../services';

import { DoctorRegistrationRoutingModule } from './doctor-registration-routing.module';
import { DoctorRegistrationComponent } from './doctor-registration.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
    imports: [
        CommonModule,
        DoctorRegistrationRoutingModule,
        FormsModule,
        NgbModule,
        MultiselectDropdownModule
    ],
    providers: [ UserService, InsuranceService, DoctorService ],
    declarations: [DoctorRegistrationComponent]
})
export class DoctorRegistrationModule {
}
