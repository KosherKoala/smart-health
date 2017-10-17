import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [routerTransition()]
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
