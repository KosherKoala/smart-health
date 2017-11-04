import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CalendarEvent } from 'angular-calendar';
import {EventColor} from 'calendar-utils';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services';
import { Doctor } from '../../../../server/models/classes/doctor';
import { getMonth, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, addHours} from 'date-fns';
import RRule from 'rrule';

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: RRule.Frequency;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: RRule.Weekday[];
  };
  start?: Date,
  end?: Date
}

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss'],
  animations: [routerTransition()]
})
export class DoctorPageComponent implements OnInit {

  id: number;
  private sub: any;
  public doctor = { location: {} };

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

  currentAppointments = [
    {
      title: 'Tooth Pull',
      start: new Date('Sat Nov 04 2017 00:00:00 GMT-0400 (EDT)')
    }
  ]


  recurringEvents: RecurringEvent[] = [
    {
      title: 'Recurs on the 5th of each month',
      color: this.colors.yellow,
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5
      }
    },
    {
      title: 'Recurs yearly on the 10th of the current month',
      color: this.colors.blue,
      rrule: {
        freq: RRule.YEARLY,
        bymonth: getMonth(new Date()) + 1,
        bymonthday: 10
      }
    },
    {
      title: 'Tooth Pull',
      color: this.colors.red,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO, RRule.WE, RRule.SA]
      }
    }
  ];

  events: CalendarEvent[] = [];

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit() {
    this.later.setHours(this.viewDate.getHours() + 2);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.doctorService.getDoctorById(this.id).then((data: any) => { this.doctor = data });
    });

    this.updateCalendarEvents();

  }

  dayClicked(event): void {
    console.log('Day clicked', event);
    this.viewDate = event.day.date;
    this.view = 'day';
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

  updateCalendarEvents(): void {
    this.events = [];

    const startOfPeriod: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    };

    const endOfPeriod: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    };

    this.recurringEvents.forEach(event => {
      const rule: RRule = new RRule(
        Object.assign({}, event.rrule, {
          dtstart: startOfPeriod[this.view](this.viewDate),
          until: endOfPeriod[this.view](this.viewDate)
        })
      );

      rule.all().forEach(date => {
        this.events.push(
          Object.assign({}, event, {
            start: new Date(date),
            end: addHours(new Date(date), 2)
          })
        );
      });
    });

  }
}
