import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService, PatientService, DoctorService, UserService } from '../services';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public currentUser =  JSON.parse(localStorage.getItem('currentUser'));


    constructor(public router: Router,
                private currentUserService: CurrentUserService,
                private userService: UserService,
                private doctorService: DoctorService) { }

    ngOnInit() {

        this.userService.getUserById(this.currentUser._id)
            .then((data: any) => { this.currentUserService.currentUser = data; console.log(this.currentUserService.currentUser)
        });

        if (this.router.url === '/') {
        //    this.router.navigate(['/dashboard']);
        }
    }

}
