
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HistoryService } from './history.service';
import { UserService } from './user.service';
import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';
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
        private historyService: HistoryService)
    {
    // set token if saved in local storage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }

    login(email: string, password: string) {
        return this.http.post('/api/user/authenticate/', { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ _id: response.json().obj._id, email: email, token: token }));

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
        console.log("inininb", this.currentUser)
        return new Promise((resolve, reject) => {
        // console.log('init user', this.currentUser)
            const user = JSON.parse(localStorage.getItem('currentUser'));
            if (user)
            {
                this.userService.getUserById(user._id).then((data: any) => {
                this.currentUser = data;
                if ( this.currentUser.patient) {
                    for (let i = 0; i < this.currentUser.patient.history.length; i++) {
                    this.historyService.getHistoryById(this.currentUser.patient.history[i])
                        .then ( (res: any) => {
                                            this.currentUser.patient.history[i] =  res;

                                            resolve(this.currentUser);
                                        });
                    }
                } else if ( this.currentUser.doctor) {
                    for (let i = 0; i < this.currentUser.doctor.history.length; i++) {
                    this.historyService.getHistoryById(this.currentUser.doctor.history[i])
                        .then ( (res: any) => {
                                            this.currentUser.doctor.history[i] =  res;

                                            resolve(this.currentUser);
                                        });
                    }
                }
                });
            }
        });
    }


}
