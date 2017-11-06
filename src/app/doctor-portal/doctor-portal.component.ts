import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../services';

@Component({
  selector: 'app-doctor-portal',
  templateUrl: './doctor-portal.component.html',
  styleUrls: ['./doctor-portal.component.scss'],
  animations: [routerTransition()]
})
export class DoctorPortalComponent implements OnInit {

  public model = {email: '', password: ''};

    constructor(public router: Router, private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    login() {
        console.log(this.model);
       /* if (this.authenticationService.loginDoctor(this.model.email, this.model.password)) {
            this.router.navigate(['dashboard']);
        }*/
    }
}
