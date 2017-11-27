import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatModule } from '../../shared';
import { UserService, AuthenticationService, HistoryService, 
        AppointmentService, CalendarService, DoctorService, ProcedureService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {PdfmakeService} from 'ng-pdf-make';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StatModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ProfileComponent],
  providers: [ UserService, AuthenticationService, ProcedureService, DoctorService,
                PdfmakeService, HistoryService, AppointmentService, CalendarService],
})
export class ProfileModule { }
