import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatModule } from '../../shared';
import { PatientService, CurrentUserService, HistoryService } from '../../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {PdfmakeService} from 'ng-pdf-make'



@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StatModule,
    NgbModule
  ],
  declarations: [ProfileComponent],
  providers: [ PatientService, CurrentUserService, PdfmakeService, HistoryService],
})
export class ProfileModule { }
