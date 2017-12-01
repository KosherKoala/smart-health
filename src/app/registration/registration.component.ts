import { Component, OnInit } from '@angular/core';
import { User, Patient } from '../shared';
import { Router } from '@angular/router';
import { UserService, PatientService, HealthService, InsuranceService } from '../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  public userModel: any = {};
  public patientModel: any = { insurance: null, health: {conditions: [], allergies: [], medication: []} };
  public loading = false;
  public created = false;
  public bloodTypes = ['O', 'A', 'B', 'AB', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  public newData = {med: '', al: '', con: ''} ;
  public genders = ['Male', 'Female']
  public newAl;
  public newCon;
  public errors = {password: null}
  public insurances= [];

  constructor(public router: Router,
              private userService: UserService,
              private patientService: PatientService,
              private healthService: HealthService,
              private insuranceService: InsuranceService) {
                this.insuranceService.getAllInsurances()
                  .then ( (data: any) => {this.insurances = data.insurance; console.log(this.insurances)} )
               }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    console.log('Registering')
    console.log(this.userModel, this.patientModel);

    if (this.userModel.password !== this.userModel.passwordConfirmation) {
      this.errors.password = 'Passwords don\'t match';
    } else {
      console.log("Email",this.userModel.email)
      this.userService.getUser({email: this.userModel.email})
        .then((res: any) => {
          console.log('checking repeats', res);
          if (!res.success) {
            this.patientModel.firstName = this.userModel.firstName;
            this.patientModel.lastName = this.userModel.lastName;

            this.healthService.createHealth(this.patientModel.health)
              .then( (data: any) => {
                                      this.patientModel.health = data.health._id
                                      this.patientModel.picture = 'http://lorempixel.com/300/300/people/' + (Math.floor(Math.random() * 10) + 1);  
                                      console.log('here');
                                      console.log(this.patientModel)

                                      this.patientService.createPatient(this.patientModel)
                                        .then( (patient: any) => {
                                          this.userModel.patient = patient.patient._id;
                                          this.userService.createUser(this.userModel)
                                          .then((r: any) => {
                                            console.log('registering', r);
                                            if (data.success) {
                                              this.router.navigate(['/login']);
                                            }
                                          });
                                        })
                                    });
          } else {
            console.log('Patient email aready used');
          }
        });
    }
  }


  addMed() {
    this.patientModel.health.medication.push(this.newData.med)
    this.newData.med = '';
  }

  addAl() {
    this.patientModel.health.allergies.push(this.newData.al)
    this.newData.al = '';
  }

  addCon() {
    this.patientModel.health.conditions.push(this.newData.con)
    this.newData.con = '';
  }

  print() {
    console.log(this.userModel, this.patientModel)
  }
}
