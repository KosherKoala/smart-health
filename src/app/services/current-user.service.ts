import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';
import {  HistoryService } from './history.service';

@Injectable()
export class CurrentUserService {
  public isSet = false;
  public currentUser: any = {};

  constructor(private userService: UserService, private historyService: HistoryService) { }

  public initUser() {
    console.log('init user', this.currentUser)
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if ( !this.isSet ) {

      this.userService.getUserById(user._id).then((data: any) => {

        this.currentUser = data;

        console.log('current user', this.currentUser)
        if ( this.currentUser.patient) {

          console.log('is patient')

          for (let i = 0; i < this.currentUser.patient.history.length; i++) {
              this.historyService.getHistoryById(this.currentUser.patient.history[i])
                .then ( (res: any) => {
                                    this.currentUser.patient.history[i] =  res;
                                  }
              )
          }
        } else if ( this.currentUser.doctor) {
            for (let i = 0; i < this.currentUser.doctor.history.length; i++) {
                this.historyService.getHistoryById(this.currentUser.doctor.history[i])
                  .then ( (res: any) => {
                                      this.currentUser.doctor.history[i] =  res;
                                    }
                )
            }
        }
        console.log(this.currentUser)
        this.isSet = true;
        return this.currentUser;
      });
    }
    return this.currentUser;
  }
}
