import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorPageComponent } from './doctor-page.component';
import { DoctorPageRoutingModule } from './doctor-page-routing.module';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DoctorPageRoutingModule
  ],
  declarations: [DoctorPageComponent]
})
export class DoctorPageModule { }
