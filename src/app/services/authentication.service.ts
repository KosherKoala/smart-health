
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HistoryService } from './history.service';
import { UserService } from './user.service';
import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';
import { CalendarService } from './calendar.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    public currentUser;

    constructor(private http: Http,
        private router: Router,
        private userService: UserService,
        private doctorService: DoctorService,
        private patientService: PatientService,
        private calendarService: CalendarService,
        private historyService: HistoryService)
    {
    // set token if saved in local storage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }

    login(email: string, password: string) {
        console.log('service login');
        return this.http.post('/api/user/authenticate/', { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    if (response.json().obj.doctor) {
                        localStorage.setItem('currentUser', JSON.stringify({
                            _id: response.json().obj._id,
                            doctor: response.json().obj.doctor._id,
                            email: email, token: token }));
                    }
                    else{
                        localStorage.setItem('currentUser', JSON.stringify({
                            _id: response.json().obj._id,
                            patient: response.json().obj.patient._id,
                            email: email, token: token }));

                    }
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login

                    console.log('not logged IN!');
                    return false;
                }
            })
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.currentUser = {};
        this.router.navigate(['/login'])
    }

    public initUser() {
       console.log("init user")
        return new Promise((resolve, reject) => {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            if (user) {
                this.userService.getUserById(user._id).then((data: any) => {
                this.currentUser = data;

                if ( this.currentUser.patient) {
                    //console.log('patient');
                    for (let i = 0; i < this.currentUser.patient.history.length; i++) {

                      //  console.log('patient history', i);
                        this.historyService.getHistoryById(this.currentUser.patient.history[i])
                            .then ( (res: any) => {
                                                this.currentUser.patient.history[i] =  res;
                                                if (i === this.currentUser.patient.history.length - 1 ) {
                                                    console.log('before res', this.currentUser)
                                                    resolve(this.currentUser);
                                                }
                                            });

                    }
                    if (this.currentUser.patient.history.length === 0) {
                        resolve(this.currentUser);
                    }
                } else if ( this.currentUser.doctor) {

                    this.calendarService.getCalendarById(this.currentUser.doctor.calendar)
                        .then( (cal) => {
                                            this.currentUser.doctor.calendar = cal;
                                            for (let i = 0; i < this.currentUser.doctor.history.length; i++) {
                                                this.historyService.getHistoryById(this.currentUser.doctor.history[i])
                                                    .then ( (res: any) => {
                                                                        this.currentUser.doctor.history[i] =  res;
                                                                        if (i === this.currentUser.doctor.history.length - 1 ) {
                                                                            resolve(this.currentUser);
                                                                        }

                                                                        });
                                            }
                                            if (this.currentUser.doctor.history.length === 0) {
                                                resolve(this.currentUser);
                                            }
                                        });
                };
            });
        };
    });
    }

}
