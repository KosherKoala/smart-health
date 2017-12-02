import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService, AuthenticationService, HistoryService, DoctorService,
         AppointmentService, CalendarService, ProcedureService, ChatService } from '../../services';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
import { Cell, Row, Table } from 'ng-pdf-make/objects/table';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { getMonth, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, addHours} from 'date-fns';
import RRule from 'rrule';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {

  public doctors = [];
  public appointments = [];
  public slots = [];
  public newChat: any = { message: ''};
  public currentChat: any = {chat: []};
  public currentUser: any;
  public collapseInsurance = false;
  public collapseHistories = false;
  public clickedAppointment;
  public clickedProcedure;
  private modalRef: NgbModalRef;
  public model= {comment: ''};
  public chosenProcedure = '';
  public viewedProcedure;
  closeResult: string;

  // Modal States
    public  accepting;
    public  denying;
    public  completing;
    public  cancelling;
    public  editing;
    public  deleting;
    public  creating;


  public ruleModel: any = { freq: '',
                            dtstart: null,
                            until: null,
                            byweekday: [false, false, false, false, false, false, false],
                            bymonth: [false, false, false, false, false, false, false, false, false, false, false, false]
                          } ;
  public procedureModel: any = {};
  public rrule: RRule;

  constructor(private authService: AuthenticationService,
              private historyService: HistoryService,
              private appointmentService: AppointmentService,
              private doctorService: DoctorService,
              private procedureService: ProcedureService,
              private calendarService: CalendarService,
              private chatService: ChatService,
              private pdfmake: PdfmakeService,
              private modalService: NgbModal) {

    }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.authService.initUser().then( (data) => { this.currentUser = data; this.generateAppointmentList();


      if (this.currentUser.patient) {
        if (this.currentUser.patient.history && this.currentUser.patient.history.length > 0) {
          this.currentChat = this.currentUser.patient.history[0];
          this.newChat = {sender: this.currentUser.patient._id, message: '' }
          console.log('current chat', this.currentChat)
        }
      } else if (this.currentUser.doctor) {
        if (this.currentUser.doctor.history && this.currentUser.doctor.history.length > 0) {
          this.currentChat = this.currentUser.doctor.history[0];
          this.newChat = {sender: this.currentUser.doctor._id, message: '' }
          console.log('current chat', this.currentChat)
        }
      }

    });
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

       //const topHeader1 = new Cell('Physician');
       //const topHeader2 = new Cell('Patient');
       //const topHeader3 = new Cell('Patient Since');

       const topHeader1 = new Cell('Physician');
       const topHeader2 = new Cell('Specialty');
       const topHeader3 = new Cell('Patient');


       const topHeaders = new Row([topHeader1, topHeader2, topHeader3]);

       const topRow1 = new Row([new Cell(' Dr. ' + history.doctor.firstName + ' ' + history.doctor.lastName),
        new Cell(history.doctor.specialty),
        new Cell(history.patient.firstName + ' ' + history.patient.lastName)]);
    

       //const topTable = new Table(topHeaders, [topRow1]);
       const topTable = new Table(topHeaders, [topRow1]);

       this.pdfmake.addTable(topTable);

       this.pdfmake.addText(' ')

    // Appointment Table
       this.pdfmake.addText('Appointment Info', 'label');

        // Create Headers cells
        //const apptHeader1 = new Cell('Number');
        //const apptHeader2 = new Cell('Type');
        const apptHeader1 = new Cell('Date');
        const apptHeader2 = new Cell('Procedure');
        const apptHeader3 = new Cell('Description');
        const apptHeader4 = new Cell('Pending');
        const apptHeader5 = new Cell('Active');
        const apptHeader6 = new Cell('Completed');
        const apptHeader7 = new Cell('Message');

        // Create headers row
        const apptHeaderRows = new Row([apptHeader1, apptHeader2, apptHeader3, apptHeader4, apptHeader5, apptHeader6, apptHeader7]);
        // Create a content row
        let apptRows = []

        for(let appt of history.appointments) {
          apptRows.push (new Row([new Cell(appt.date.toString()),
          new Cell(appt.procedure.name),
          new Cell(appt.procedure.description),
          new Cell(appt.isPending),
          new Cell(appt.isActive),
          new Cell(appt.isCompleted),
          new Cell(appt.message)]));
        }

        // Create table object
        const apptTable = new Table(apptHeaderRows, apptRows);

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
            let chatRows = []

            for (let chat of history.chat)
            {
              if (chat.sender == history.doctor._id) {
                chatRows.push (new Row([new Cell(' Dr. ' + history.doctor.firstName + ' ' + history.doctor.lastName),
                                     new Cell(chat.date.toString()),
                                     new Cell(chat.message)]));
                }

              else {
                chatRows.push (new Row([new Cell(history.patient.firstName + ' ' + history.patient.lastName),
                new Cell(chat.date.toString()),
                new Cell(chat.message)]));
              }
            }
            // Create table object
            const chatTable = new Table(chatHeaderRows, chatRows);
            this.pdfmake.addTable(chatTable);

       this.pdfmake.download()
       this.pdfmake.docDefinition.content = [];
  }


  updateRrule(event) {
  //  console.log(this.ruleModel, event)

    let days = [];
    let months = [];

    let rule: any = {}

    rule.freq = Number(this.ruleModel.freq);

    if (this.ruleModel.dtstart !=  null) {
      rule.dtstart = new Date(this.ruleModel.dtstart.year + '-' + this.ruleModel.dtstart.month + '-' + this.ruleModel.dtstart.day);
    }

    if (this.ruleModel.until !=  null) {
      rule.until = new Date(this.ruleModel.until.year + '-' + this.ruleModel.until.month + '-' + this.ruleModel.until.day)
    }

    for ( let i = 0; i < this.ruleModel.byweekday.length; i++) {
      if (this.ruleModel.byweekday[i]) {
        days.push(i)
      }
    }

    for (let i = 0; i < this.ruleModel.bymonth.length; i++) {
      if (this.ruleModel.bymonth[i]) {
        months.push(i + 1)
      }
    }

    if( days.length > 0) {
      rule.byweekday = days;
    }

    if( months.length > 0) {
      rule.bymonth = months;
    }

    this.rrule = rule;

  }

// Slots
  createSlot() {
    this.updateRrule({});
    console.log('rrule test', this.rrule, this.chosenProcedure)
    let slot =  {rrule: this.rrule, procedure: this.chosenProcedure}

    this.calendarService.addSlot(this.currentUser.doctor.calendar._id, slot).then((data) => {console.log(data)});
  }

  renderTime(slot) {
    slot.dtstart = new Date(slot.dtstart);
    slot.until = new Date(slot.until);
    return new RRule(slot).toText();
  }

// Appointments
  cancelAppointment(appt) {

    this.appointmentService.cancelAppointment(appt._id, this.model.comment)
        .then( (data: any) => { if (data.success) {
                                  this.calendarService.removeAppointment( appt.doctor.calendar, appt._id)
                                  .then( (cal) => { this.generateAppointmentList(); this.resetModal(); this.modalRef.close(); } );
                                }
                              });
  }

  acceptAppointment(appt) {
    this.appointmentService.acceptAppointment(appt._id, this.model.comment).then( (data: any) => { if (data.success) {
                                                                            this.resetModal()
                                                                            this.generateAppointmentList() } });
  }

  denyAppointment(appt) {
    this.appointmentService.denyAppointment(appt._id, this.model.comment)
        .then( (data: any) => { if (data.success) {
                                    this.calendarService.removeAppointment( appt.doctor.calendar, appt._id)
                                        .then( (cal) => { this.generateAppointmentList(); this.resetModal(); this.modalRef.close() } );
                                }
                              });
  }

  completeAppointment(appt) {
    this.appointmentService.completeAppointment(appt._id, this.model.comment)
          .then( (data: any) => { if (data.success) {
                                      this.calendarService.removeAppointment( appt.doctor.calendar, appt._id)
                                        .then( (cal) => { this.generateAppointmentList(); this.resetModal(); this.modalRef.close() } );
                                }
          });
  }

  openAppointmentModal( appointment, content: any, type: string): void {

    console.log(appointment)
    this.clickedAppointment = appointment;
    if (type == 'cancel') {
      this.cancelling = true;
    } else if (type == 'accept') {
      this.accepting = true;
    } else if (type == 'deny') {
      this.denying = true;
    } else if (type == 'complete') {
      this.completing = true;
    }

    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.resetModal();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.resetModal();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

// Procedures
  openProcedureModal( procedure, content: any, type: string): void {

    this.procedureModel = Object.assign({}, procedure);
    console.log('clsiked', this.clickedProcedure)
    if (type == 'delete') {
      this.deleting = true;
    } else if (type == 'edit') {
      this.editing = true;
    } else if (type == 'create') {
      this.creating = true;
    }

    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.resetModal();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.resetModal();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateProcedure() {
    let command = {$set: { name: this.procedureModel.name,
                            cost: this.procedureModel.cost,
                            duration: this.procedureModel.duration,
                            description: this.procedureModel.description
                          }}

      console.log(this.procedureModel)

    this.procedureService.updateProcedure(this.procedureModel._id, command)
      .then( (data) => {this.authService.initUser()
                            .then((data2) => { this.currentUser = data2; this.generateAppointmentList(); this.modalRef.close() } );
                      });
  }

  createProcedure() {
    this.procedureService.createProcedure(this.procedureModel)
      .then( (data: any) => {
                                this.doctorService.updateDoctor(this.currentUser.doctor._id, {$push: {procedures: data.procedure} })
                                  .then( (data2) => {
                                                      this.authService.initUser()
                                                          .then((data3) => {
                                                                              this.currentUser = data3;
                                                                              this.generateAppointmentList();
                                                                              this.modalRef.close()
                                                                            });
                                                    });
                            });
  }

  deleteProcedure() {
    this.procedureService.deleteProcedure(this.procedureModel._id)
    .then( (data: any) => {this.doctorService.updateDoctor(this.currentUser.doctor._id, {$pull: {procedures: this.procedureModel._id } })
                           .then( (data2) => {
                                                this.authService.initUser()
                                                    .then((data3) => {
                                                                        this.currentUser = data3;
                                                                        this.generateAppointmentList();
                                                                        this.modalRef.close()
                                                                      });
                            });
                      });

  }

  viewProcedure(procedure) {
    if( this.viewedProcedure === procedure) {
      this.viewedProcedure = {};
    } else {
      this.viewedProcedure = procedure;
    }
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

  // Chat
  sendMessage() {
    if (this.newChat.message !== '') {
      this.newChat.date = new Date();
      this.chatService.createChat(this.newChat)
        .then( (data: any) => {
                      console.log(this.currentChat);
                      this.currentChat.chat.push(data.chat)
                      this.historyService.addChat(this.currentChat._id , data.chat._id)
                        .then( (history: any) => { });
      });
    }
  }

  // Clean up
  generateAppointmentList() {
    this.appointments = [];
    if (this.currentUser.patient) {

      for (let history of this.authService.currentUser.patient.history) {
        for (let appointment of history.appointments) {
          if (appointment.isActive) {
           this.appointments.push(appointment);
          }
        }
      }
     // console.log(this.appointments)
    } else  if (this.currentUser.doctor) {
      console.log("doctor")
      this.calendarService.getCalendarById(this.authService.currentUser.doctor.calendar._id)
        .then( (cal) => {  this.authService.currentUser.doctor.calendar = cal;
                            for (let appointment of this.authService.currentUser.doctor.calendar.appointments) {
                              this.appointments.push(appointment);
                            }

                            for (let slot of this.authService.currentUser.doctor.calendar.slots) {
                              this.slots.push(slot);
                            }

                            for (let i = 0; i < this.slots.length; i++) {
                              console.log(this.slots[i].rrule)
                              _.pickBy(this.slots[i].rrule, _.identity);
                            }
                        });
      }
   //   console.log(this.appointments)
  }

  resetModal() {
    this.completing = false;
    this.accepting = false;
    this.denying = false;
    this.cancelling = false;
    this.creating = false;
    this.editing = false;
    this.deleting = false;
  }
}
