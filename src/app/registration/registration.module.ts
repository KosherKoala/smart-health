import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
    imports: [
        CommonModule,
        RegistrationRoutingModule
    ],
    declarations: [RegistrationComponent]
})
export class RegistrationModule {
}
