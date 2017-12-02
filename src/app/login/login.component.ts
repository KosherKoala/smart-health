import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService, HealthService, InsuranceService, HistoryService } from '../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public model = {email: '', password: ''};
    public error = '';
    public loading = false;

    public health = {
                        patient: '59f7fd5d41f70e674d4e5dc2',
                        height: '5\'11',
                        weight: '240',
                        age: '22',
                        sex: 'Male',
                        bloodType: 'A-',
                        medication: ['Trifexus', 'Symestin'],
                        allergies: ['Peanuts', 'Shellfish'],
                        conditions: ['Blind']
                    }

    public insurance = {
                        name: 'WellCare',
                        insuranceId: 757464738,
                    }

    public history =  {
                            doctor:  '59f66ea0e6698d8d48a096d6',
                            patient: '59f876ea92030928b3fd723d'
    }

    constructor(public router: Router,
                private authenticationService: AuthenticationService,
                private healthService: HealthService,
                private insuranceService: InsuranceService,
                private historyService: HistoryService,
            ) {
    }

    ngOnInit() {
    }

    login() {

        this.authenticationService.login(this.model.email, this.model.password).subscribe(result => {
            console.log(result);
            if (result === true) {
               console.log("diiid it")

            this.router.navigate(['/dashboard']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
    }

    logout() {
        if (this.authenticationService.logout()) {
          //  this.router.navigate(['/dashboard']);
        }
    }

    make() {
        /*this.healthService.createHealth(this.health).then(result => {
            console.log('health made');
        });*/

        /*this.insuranceService.createInsurance(this.insurance).then(result => {
            console.log('insurance made');
        });

        this.historyService.createHistory(this.history).then(result => {
            console.log('history made');
        });*/

    }

}
