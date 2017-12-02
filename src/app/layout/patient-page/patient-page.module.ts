import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPageComponent } from './patient-page.component';
import { PatientPageRoutingModule } from './patient-page-routing.module';
import { CalendarModule } from 'angular-calendar';
import { StatModule } from '../../shared';
import { PatientService, CalendarService, AppointmentService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DayPilot} from 'daypilot-pro-angular';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    PatientPageRoutingModule,
    NgbModule,
    StatModule,
    FormsModule
  ],
  declarations: [PatientPageComponent, CalendarHeaderComponent],
  providers: [PatientService, CalendarService, AppointmentService]
})
export class PatientPageModule { }
