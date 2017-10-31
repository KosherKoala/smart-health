import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared';
import { Router } from '@angular/router';
import { PatientService } from '../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  public submitted = false;
  public model = new Patient('', '', '', '', '');
  public loading = false;
  public created = false;

  public errors = {password: null}

  constructor(public router: Router, private patientService: PatientService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    console.log(this.model);

    if (this.model.password !== this.model.passwordConfirmation) {
      this.errors.password = 'Passwords don\'t match';
    } else {

      this.patientService.getPatient({email: this.model.email})
        .then((res: any) => {
          console.log('logging', res);
          if (res.success) {
            this.created = true;
          }
        });

      this.patientService.createPatient(this.model)
        .then((res: any) => {
          console.log('logging', res);
          if (res.success) {
            this.created = true;
          }
        });
    }
  }

}
