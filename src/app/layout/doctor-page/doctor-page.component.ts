import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CalendarEvent } from 'angular-calendar';
import { EventColor} from 'calendar-utils';
import { ActivatedRoute } from '@angular/router';
import { DoctorService, CalendarService, AppointmentService, AuthenticationService } from '../../services';
import { Doctor } from '../../../../server/models/classes/doctor';
import {NgbModal, NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  private modalRef: NgbModalRef;


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
                private authService: AuthenticationService,
                private modalService: NgbModal) { }



  ngOnInit() {

    this.authService.initUser();

    this.later.setHours(this.viewDate.getHours() + 2);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
     // console.log(this.id)
      this.doctorService.getDoctorById(this.id).then((data: any) => {
                                            this.doctor = data;
                                         //   console.log("before pop ", this.doctor);
                                            this.calendarService.getCalendarById(this.doctor.calendar).then( (data2: any) => {
                                              this.doctor.calendar =  data2;
                                              for (let slot of this.doctor.calendar.slots) {
                                                
                                               for (let i = 0; i < slot.rrule.byweekday.length; i++) {
                                                  if (slot.rrule.byweekday[i] === 0) {
                                                    slot.rrule.byweekday[i] = 6;
                                                  } else {
                                                    slot.rrule.byweekday[i]--;
                                                  }
                                                }
                                               // console.log('post', slot.rrule, slot.procedure)
                                                this.recurringEvents.push(
                                                   {
                                                    title: slot.procedure.name,
                                                    color: this.colors.yellow,
                                                    rrule: slot.rrule,
                                                    procedure: slot.procedure
                                                  }
                                                );
                                              }

                                              console.log('recurring', this.recurringEvents)

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

    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  request(event) {

    console.log("req event", event);

    let appointment = { date: event.start,
                        patient: this.authService.currentUser.patient._id,
                        doctor: this.doctor._id,
                        timeIn: event.start,
                        timeOut: event.end,
                        isPending: true,
                        procedure: event.procedure._id
                      }
    console.log('requested', appointment);
    this.appointmentService.makeAppointment(appointment,
                                            this.doctor,
                                            this.authService.currentUser.patient)
                                              .then((data) => {
                                                                this.updateCalendarEvents();
                                                                this.modalRef.close();
                                                              });

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

    console.log('updating events')
    this.events = [];

    const removeAppointments = ( ) => {
      this.events =  this.events.filter(slot => {
        for (let current of this.currentAppointments)
        {
          if (current.procedure._id == slot.procedure._id && !current.isPending) {
            let d1 = new Date(current.date);
            let d2 = slot.start

            if (d1.getTime() == d2.getTime()) {
              console.log("removing", current);
              return false;
            }
          }
          return true;
        }
        return true;
      });
    }

    const promise = new Promise((resolve, reject) => {

      if (this.generateEvents()) {
        resolve(true);
      } else {
        reject();
      }
    });

    promise.then((data) => {removeAppointments()});

  }

  public generateEvents () {

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

    this.recurringEvents.forEach(event => {console.log('for each', event);

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
            end: addHours(new Date(date), Number(event.procedure.duration) )
          })
        );
      });
    });

    console.log('events', this.events)
    return true;
  }

}
