import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorPageComponent } from './doctor-page.component';
import { DoctorPageRoutingModule } from './doctor-page-routing.module';
import { CalendarModule } from 'angular-calendar';
import { StatModule } from '../../shared';
import { DoctorService, CalendarService, AppointmentService, CurrentUserService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DayPilot} from 'daypilot-pro-angular';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DoctorPageRoutingModule,
    NgbModule,
    StatModule
  ],
  declarations: [DoctorPageComponent],
  providers: [DoctorService, CalendarService, AppointmentService, CurrentUserService]
})
export class DoctorPageModule { }
