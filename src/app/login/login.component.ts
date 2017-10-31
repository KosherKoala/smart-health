import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../services';

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

    constructor(public router: Router, private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    login() {
        console.log("doing it")
        this.authenticationService.loginPatient(this.model.email, this.model.password).subscribe(result => {
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

}
