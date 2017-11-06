import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-tab',
  templateUrl: './doctor-tab.component.html',
  styleUrls: ['./doctor-tab.component.scss']
})
export class DoctorTabComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
