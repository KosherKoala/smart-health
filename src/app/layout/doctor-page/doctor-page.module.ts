import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorPageComponent } from './doctor-page.component';
import { DoctorPageRoutingModule } from './doctor-page-routing.module';
import { CalendarModule } from 'angular-calendar';
import { StatModule } from '../../shared';
import { DoctorService, CalendarService, AppointmentService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DayPilot} from 'daypilot-pro-angular';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DoctorPageRoutingModule,
    NgbModule,
    StatModule
  ],
  declarations: [DoctorPageComponent, CalendarHeaderComponent],
  providers: [DoctorService, CalendarService, AppointmentService]
})
export class DoctorPageModule { }
