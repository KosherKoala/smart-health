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

  id: number;
  public sub;

  public appointments = []

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

  generateAppointmentList() {

    for (let history of this.authService.currentUser.doctor.history) {
      console.log('his', history)
      if (history.patient._id == this.patient._id) {
        for (let appointment of history.appointments) {
          this.appointmentService.getAppointmentById(appointment)
            .then( (appt) => {  this.appointments.push(appt) } )
        }
      }
    }
    console.log(this.appointments)
  }
}
