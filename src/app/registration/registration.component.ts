import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {


  public submitted = false;
  public model = new Patient('', '', '', '', '');
  public loading = false;

  constructor() { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    console.log(this.model);
    /*
    this.userService.create(this.model)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });*/
} 

}
