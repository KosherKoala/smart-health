import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from '../services';

import { DoctorRegistrationRoutingModule } from './doctor-registration-routing.module';
import { DoctorRegistrationComponent } from './doctor-registration.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        DoctorRegistrationRoutingModule,
        FormsModule,
        NgbModule
    ],
    providers: [ UserService ],
    declarations: [DoctorRegistrationComponent]
})
export class DoctorRegistrationModule {
}
