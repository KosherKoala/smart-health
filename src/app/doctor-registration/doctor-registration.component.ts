import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared';
import { Router } from '@angular/router';
import { UserService, InsuranceService, DoctorService, CalendarService } from '../services';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent implements OnInit {


  public submitted = false;
  public userModel: any = {};
  public doctorModel: any = {location: {}, acceptedInsurance: [] };
  public loading = false;
  public created = false;

  optionsModel: number[];
  myOptions: IMultiSelectOption[];


  public errors = {password: null}
  public doctor;

  constructor(public router: Router, private userService: UserService, private calendarService: CalendarService,
              private doctorService: DoctorService, private insuranceService: InsuranceService) { }

  ngOnInit() {

    this.insuranceService.getAllInsurances()
      .then( (data: any) => {
                              for (let ins of data.insurance){
                                ins.id = ins._id;
                              }
                              this.myOptions = data.insurance;
                            });
  }

  onChange() {
    console.log(this.doctorModel.acceptedInsurance);
  }

  register() {
    this.loading = true;
    console.log('models', this.userModel, this.doctorModel);

    if (this.userModel.password !== this.userModel.passwordConfirmation) {
      this.errors.password = 'Passwords don\'t match';
    } else {
      console.log('Email', this.userModel.email)
      this.userService.getUser({email: this.userModel.email})
        .then((res: any) => {
          console.log('checking repeats', res);
          if (!res.success) {
            this.doctorModel.firstName =  this.userModel.firstName;
            this.doctorModel.lastName =  this.userModel.lastName;
            this.calendarService.createCalendar({})
              .then( (cal: any) => {
                                      this.doctorModel.calendar = cal.calendar._id;
                                      this.doctorModel.picture = 'http://lorempixel.com/300/300/people/' + (Math.floor(Math.random() * 10) + 1);  
                                      this.doctorService.createDoctor(this.doctorModel)
                                        .then( (doc: any) => {
                                            this.userModel.doctor = doc.doctor._id;

                                            this.userService.createUser(this.userModel)
                                            .then((r: any) => {
                                              console.log('registering', r);
                                              if (r.success) {
                                                this.router.navigate(['/login']);
                                              }
                                              });
                                          });
              });
          } else {
            console.log('Doctor email aready used');
          }
        });
    }
  }

}
