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

    constructor(public router: Router, private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    login() {
        console.log(this.model);
        if (this.authenticationService.login(this.model.email, this.model.password)) {
            this.router.navigate(['dashboard']);
        }
    }

}
