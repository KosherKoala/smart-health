import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatModule } from '../../shared';
import { UserService, CurrentUserService, HistoryService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {PdfmakeService} from 'ng-pdf-make';
import { DoctorTabComponent } from './components/doctor-tab/doctor-tab.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StatModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ProfileComponent, DoctorTabComponent],
  providers: [ UserService, CurrentUserService, PdfmakeService, HistoryService],
})
export class ProfileModule { }
