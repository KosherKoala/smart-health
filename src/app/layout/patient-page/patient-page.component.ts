import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { PatientService, CalendarService, AppointmentService, AuthenticationService } from '../../services';
import { Patient } from '../../../../server/models/classes/patient';
import {NgbModal, NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss'],
  animations: [routerTransition()]
})

export class PatientPageComponent implements OnInit {

  public patient: any = { health: {} };
  private modalRef: NgbModalRef;
  private clickedAppointment;
  id: number;
  public sub;

  public model= {comment: ''};
  public chosenProcedure;
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

  public history = [];
  public appointments = [];

  constructor(  private route: ActivatedRoute,
                private patientService: PatientService,
                private calendarService: CalendarService,
                private appointmentService: AppointmentService,
                private authService: AuthenticationService,
                private modalService: NgbModal) { }


  ngOnInit() {

    this.authService.initUser()
      .then( (user) => {
                          this.sub = this.route.params
                            .subscribe(params => {
                                                    this.id = params['id'];
                                                    this.patientService.getPatientById(this.id)
                                                      .then((data: any) => {
                                                                              this.patient = data;
                                                                              this.getHistory();
                                                                              this.generateAppointmentList();
                                                                            });
                                                  });

      });
  }

  eventClicked( content: any): void {

    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
    }, (reason) => {
    });

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

  generateAppointmentList() {

    for (let history of this.authService.currentUser.doctor.history) {
      console.log('his', history)
      if (history.patient._id == this.patient._id) {
        for (let appointment of history.appointments) {
          this.appointmentService.getAppointmentById(appointment._id)
            .then( (appt) => {  this.appointments.push(appt) } )
        }
      }
    }
    console.log(this.appointments)
  }

  getHistory() {
    for ( let hist of this.authService.currentUser.doctor.history){
      if ( hist.patient._id ==  this.id ) {
        this.history = hist
      }
    }
  }

  resetModal() {
    //console.log('reset');
    this.completing = false;
    this.accepting = false;
    this.denying = false;
    this.cancelling = false;
    this.creating = false;
    this.editing = false;
    this.deleting = false;
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
}
