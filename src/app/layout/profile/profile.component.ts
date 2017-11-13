import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService, AuthenticationService, HistoryService, AppointmentService, CalendarService } from '../../services';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';

import { Cell, Row, Table } from 'ng-pdf-make/objects/table';

import RRule from 'rrule';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {

  public doctors = [];
  public appointments = [];
  public currentUser: any;
  public collapseInsurance = false;
  public collapseHistories = false; 

  public ruleModel: any = {freq: '', dtstart: {}} ;
  public rrule: RRule;

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private historyService: HistoryService,
              private appointmentService: AppointmentService,
              private calendarService: CalendarService,
              private pdfmake: PdfmakeService) {
    }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.authService.initUser().then((data) => {console.log(data); this.currentUser = data; this.generateAppointmentList()} );
  }

  createHistory(history) {
    // Configure text styles
      this.pdfmake.configureStyles({ header: { fontSize: 18, bold: true },
                                   subheader:  { fontSize: 14, bold: true },
                                   label:  { fontSize: 12, bold: true } });

       // Title
       this.pdfmake.addText('Smart Health', 'header');

       this.pdfmake.addText(' ')

       // General Info Table
       this.pdfmake.addText('General Info', 'label');

       const topHeader1 = new Cell('Physition');
       const topHeader2 = new Cell('Patient');
       const topHeader3 = new Cell('Patient Since');


       const topHeaders = new Row([topHeader1, topHeader2, topHeader3]);

       const topRow1 = new Row([new Cell(' Dr ' + history.doctor.firstName + ' ' + history.doctor.lastName),
       new Cell(history.patient.firstName + ' ' + history.patient.lastName),
       new Cell('Time')]);

       const topTable = new Table(topHeaders, [topRow1]);

       this.pdfmake.addTable(topTable);

       this.pdfmake.addText(' ')

    // Appointment Table
       this.pdfmake.addText('Appointment Info', 'label');

        // Create Headers cells
        const apptHeader1 = new Cell('Number');
        const apptHeader2 = new Cell('Type');
        const apptHeader3 = new Cell('Date');
        const apptHeader4 = new Cell('Status');
        const apptHeader5 = new Cell('Comments');

        // Create headers row
        const apptHeaderRows = new Row([apptHeader1, apptHeader2, apptHeader3, apptHeader4, apptHeader5]);

        // Create a content row
        const apptRow1 = new Row([new Cell('One value goes here '),
                              new Cell('Another one here'),
                              new Cell('OK?'),
                              new Cell('OK?'),
                              new Cell('OK?')]);

        // Create table object
        const apptTable = new Table(apptHeaderRows, [apptRow1]);

        this.pdfmake.addTable(apptTable);
        this.pdfmake.addText(' ')

        // Appointment Table
            this.pdfmake.addText('Chat Record', 'label');

          // Create Headers cells
            const chatHeader1 = new Cell('Sender');
            const chatHeader2 = new Cell('Time');
            const chatHeader3 = new Cell('Message');

            // Create headers row
            const chatHeaderRows = new Row([chatHeader1, chatHeader2, chatHeader3]);

            // Create a content row
            const chatRow1 = new Row([new Cell('One value goes here '),
                                  new Cell('Another one here'),
                                  new Cell('OK?')]);

            // Create table object
            const chatTable = new Table(chatHeaderRows, [chatRow1]);

            this.pdfmake.addTable(chatTable);

       this.pdfmake.download()
  }

  print(){
    console.log(this.ruleModel);
  }

  updateRrule() {
    this.rrule = new RRule({
      freq: Number(this.ruleModel.freq),
      dtstart: new Date(this.ruleModel.dtstart.year + '-' + this.ruleModel.dtstart.month + '-' + this.ruleModel.dtstart.day)
    });

    console.log(this.rrule.toString());
  }

  generateAppointmentList() {
    console.log("gereeating", this.currentUser)

    if (this.currentUser.patient) {
      console.log("patient")

      for (let history of this.authService.currentUser.patient.history) {
        console.log("history")
        for (let appointment of history.appointments) {
          this.appointmentService.getAppointmentById(appointment)
            .then( (appt) => {  this.appointments.push(appt) } )
        }
      }
      console.log(this.appointments)
    } else  if (this.currentUser.doctor) {
      console.log("doctor", this.authService.currentUser.doctor)
      this.calendarService.getCalendarById(this.authService.currentUser.doctor.calendar)
        .then( (cal) => {  this.authService.currentUser.doctor.calendar = cal;
                            for (let appointment of this.authService.currentUser.doctor.calendar.appointments) {
                              this.appointments.push(appointment);
                            }
                        });
      }
      console.log(this.appointments)
  }
}
