import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PatientService } from '../services';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        FormsModule
    ],
    providers: [ PatientService ],
    declarations: [RegistrationComponent]
})
export class RegistrationModule {
}
