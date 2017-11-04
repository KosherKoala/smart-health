import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PatientService, DoctorService, CurrentUserService } from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {

  public doctors = [];
  public appointments = [1, 2, 3];
  public currentUser =  JSON.parse(localStorage.getItem('currentUser'));

  constructor(private currentUserService: CurrentUserService, private doctorService: DoctorService, private patientService: PatientService) {

    this.doctors.push(
        {
            id: 1,
            firstName: 'Rufus',
            lastName: 'Mandude',
            specialty: "Dentist",
            address: {}
        },
        {
          id: 1,
          firstName: 'Rufus',
          lastName: 'Mandude',
          specialty: "Dentist",
          address: {}
      },
      {
        id: 1,
        firstName: 'Rufus',
        lastName: 'Mandude',
        specialty: "Dentist",
        address: {}
    },
    );

    }

  ngOnInit() {

    if ( this.currentUser.type == 'patient') {
      this.patientService.getPatientById(this.currentUser._id)
          .then((data: any) => { this.currentUserService.currentUser = data; console.log(this.currentUserService.currentUser)
          });
  } else if ( this.currentUser.type == 'doctor') {
      this.doctorService.getDoctorById(this.currentUser._id)
          .then((data: any) => { this.currentUserService.currentUser = data });
  }
  }

}
