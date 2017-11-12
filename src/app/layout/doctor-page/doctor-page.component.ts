import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CalendarEvent } from 'angular-calendar';
import { EventColor} from 'calendar-utils';
import { ActivatedRoute } from '@angular/router';
import { DoctorService, CalendarService, AppointmentService, CurrentUserService } from '../../services';
import { Doctor } from '../../../../server/models/classes/doctor';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  procedure: {
    name: String,
    cost: Number,
    description: String,
    duration: Number
  }
}

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss'],
  animations: [routerTransition()]
})

export class DoctorPageComponent implements OnInit {

  private sub: any;
  public doctor: any = { location: {} };
  public clickedEvent: CalendarEvent;

  id: number;
  view = 'month';
  viewDate: Date = new Date();
  later = new Date();
  clickedDate: Date;
  closeResult: string;

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

  public currentAppointments = []

  recurringEvents: RecurringEvent[] = [];

  events: CalendarEvent[] = [];

  constructor(  private route: ActivatedRoute,
                private doctorService: DoctorService,
                private calendarService: CalendarService,
                private appointmentService: AppointmentService,
                private currentUserService: CurrentUserService,
                private modalService: NgbModal) { }


  ngOnInit() {

    this.currentUserService.initUser();

    this.later.setHours(this.viewDate.getHours() + 2);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.doctorService.getDoctorById(this.id).then((data: any) => {
                                            this.doctor = data;
                                            console.log("before pop ", this.doctor);
                                            this.calendarService.getCalendarById(this.doctor.calendar).then( (data2: any) => {
                                              this.doctor.calendar =  data2;
                                              for (let slot of this.doctor.calendar.slots) {
                                                this.recurringEvents.push(
                                                   {
                                                    title: slot.procedure.name,
                                                    color: this.colors.yellow,
                                                    rrule: slot.rrule,
                                                    procedure: slot.procedure
                                                  }
                                                );
                                              }

                                              this.currentAppointments =  this.doctor.calendar.appointments;

                                              this.updateCalendarEvents();
                                            });
                                          });
    });
  }

  dayClicked(event): void {
    console.log('Day clicked', event);
    this.viewDate = event.day.date;
    this.view = 'day';
  }

  eventClicked( event: { event: CalendarEvent }, content: any): void {

    this.clickedEvent = event.event;

    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  request(event) {

    console.log("req event", event);

    let appointment = { date: event.start,
                        patient: this.currentUserService.currentUser.patient._id,
                        doctor: this.doctor._id,
                        timeIn: event.start,
                        timeOut: event.end,
                        isPending: true,
                        procedure: event.procedure._id
                      }
    console.log('requested', appointment);
    this.appointmentService.makeAppointment(appointment,
                                            this.doctor.calendar._id,
                                            this.currentUserService.currentUser.patient.history[0]._id).then();

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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

    console.log('start fo each')
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

    console.log('pre-removal', this.events)

    this.events =  this.events.filter(slot => {
      for (let current of this.currentAppointments)
      {
        console.log("slot", slot, "current", current)
        if (current.procedure._id == slot.procedure._id  && current.start == slot.procedure.start) {
          return false;
        }
      }
      return true;
    });
  }
}
