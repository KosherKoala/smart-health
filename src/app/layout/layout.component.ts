import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService, DoctorService, UserService, AuthenticationService } from '../services';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public currentUser =  JSON.parse(localStorage.getItem('currentUser'));


    constructor(public router: Router,
                private authService: AuthenticationService,
                private userService: UserService,
                private doctorService: DoctorService) { }

    ngOnInit() {
        this.authService.initUser().then((data) => { this.currentUser = data; });

        if (this.router.url === '/') {
        //    this.router.navigate(['/dashboard']);
        }
    }

}
