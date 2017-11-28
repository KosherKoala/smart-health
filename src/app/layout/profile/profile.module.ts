import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatModule } from '../../shared';
import { UserService, AuthenticationService, HistoryService,
        AppointmentService, CalendarService, DoctorService, ProcedureService, ChatService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {PdfmakeService} from 'ng-pdf-make';
import { FormsModule } from '@angular/forms';
import { ChatPipePipe } from '../../shared/pipes/chat-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StatModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ProfileComponent, ChatPipePipe],
  providers: [ UserService, AuthenticationService, ProcedureService, DoctorService,
                PdfmakeService, HistoryService, AppointmentService, CalendarService, ChatService],
})
export class ProfileModule { }
