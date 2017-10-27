import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {

  public doctors = [];
  public appointments = [1, 2, 3];

  constructor() {  
    this.doctors.push(
        {
            id: 1,
            name: 'Dr Rufus Mandude',
            specialty: "Dentist",
            address: "1221 Foggy Dr, Suite 300, 32746"
        },
        {
            id: 2,
            name: 'Dr Tommy Gill',
            specialty: "Plastic Surgeon",
            address: "1223 Foggy Cir, Suite 2, 32746"
        }
    );

    }

  ngOnInit() {
  }

}
