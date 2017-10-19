import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CalendarEvent } from 'angular-calendar';
import {EventColor} from 'calendar-utils';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss'],
  animations: [routerTransition()]
})
export class DoctorPageComponent implements OnInit {

  view = 'month';
  viewDate: Date = new Date();
  later = new Date();

  clickedDate: Date;

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };



  events: CalendarEvent[] = [
    {
      title: 'Cleaning',
      color: this.colors.yellow,
      start: new Date(),
      end: this.later,
    },
    {
      title: 'Tooth Pull',
      color: this.colors.blue,
      start: new Date(),
      end: this.later
    }
  ];


  constructor() { }

  ngOnInit() {
    this.later.setHours(this.viewDate.getHours() + 2);
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }



}
