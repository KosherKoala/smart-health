import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorPageComponent } from './doctor-page.component';
import { DoctorPageRoutingModule } from './doctor-page-routing.module';
import { CalendarModule } from 'angular-calendar';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DoctorPageRoutingModule,
    StatModule
  ],
  declarations: [DoctorPageComponent]
})
export class DoctorPageModule { }
