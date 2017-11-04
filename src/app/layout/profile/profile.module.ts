import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatModule } from '../../shared';
import { PatientService, CurrentUserService } from '../../services';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StatModule
  ],
  declarations: [ProfileComponent],
  providers: [ PatientService, CurrentUserService],
})
export class ProfileModule { }
