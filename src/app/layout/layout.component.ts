import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService, PatientService, DoctorService } from '../services';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public currentUser =  JSON.parse(localStorage.getItem('currentUser'));


    constructor(public router: Router,
                private currentUserService: CurrentUserService,
                private patientService: PatientService,
                private doctorService: DoctorService) { }

    ngOnInit() {

        if ( this.currentUser.type == 'patient') {
            this.patientService.getPatientById(this.currentUser._id)
                .then((data: any) => { this.currentUserService.currentUser = data; console.log(this.currentUserService.currentUser)
                });
        } else if ( this.currentUser.type == 'doctor') {
            this.doctorService.getDoctorById(this.currentUser._id)
                .then((data: any) => { this.currentUserService.currentUser = data });
        }

        if (this.router.url === '/') {
        //    this.router.navigate(['/dashboard']);
        }
    }

}
