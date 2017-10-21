import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StatModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
