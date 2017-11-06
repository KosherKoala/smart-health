import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared';
import { Router } from '@angular/router';
import { UserService } from '../services';

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

  constructor(public router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    console.log(this.model);

    if (this.model.password !== this.model.passwordConfirmation) {
      this.errors.password = 'Passwords don\'t match';
    } else {
      console.log("Email",this.model.email)
      this.userService.getUser({email: this.model.email})
        .then((res: any) => {
          console.log('checking repeats', res);
          if (!res.success) {
            this.userService.createUser(this.model)
              .then((r: any) => {

                console.log('registering', r);

                if (res.success) {
                  this.router.navigate(['/login']);
                }
              });
          } else {
            console.log('Patient email aready used');
          }
        });
    }
  }

}
