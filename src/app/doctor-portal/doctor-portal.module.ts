import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorPortalComponent } from './doctor-portal.component';
import { DoctorPortalRoutingModule } from './doctor-portal-routing.module';
import { AuthenticationService } from '../services';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DoctorPortalRoutingModule,
    FormsModule
  ],
  declarations: [DoctorPortalComponent],
  providers: [AuthenticationService]
})
export class DoctorPortalModule { }
