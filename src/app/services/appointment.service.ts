import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Appointment } from '../../../server/models/classes/index';
import { PatientService } from './patient.service'
import { DoctorService } from './doctor.service'
import { CalendarService } from './calendar.service'
import { HistoryService } from './history.service'

@Injectable()
export class AppointmentService {

    constructor(private http: Http,
                private patientService: PatientService,
                private doctorService: DoctorService,
                private calendarService: CalendarService,
                private historyService: HistoryService) { }

    getAllEvents() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/appointment')
          .map(res => res.json())
          .subscribe(res => { console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getAppointment(params) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/appointment/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getAppointmentById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/appointment/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createEvent(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/appointment', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    makeAppointment(appointment, doctor, patient) {
 // console.log('makeing appointment', appointment, doctor, patient)

      return new Promise((resolve, reject) => {
        this.http.post('/api/appointment', appointment)
        .map(res => res.json())
        .subscribe(res => {
          for ( let history of patient.history)
          {
            if (history.doctor._id == doctor._id)
            {
              console.log('history found');
              this.historyService.updateHistory(history._id, {$push: {appointments: res.appointment}})
                .then( (data) => { console.log('history updated') } )
              this.calendarService.updateCalendar(doctor.calendar._id, {$push: {appointments: res.appointment}})
                .then( (data) => { console.log('calendar updated') } )
              resolve(res);
            }
          }
          console.log('history not found');
          this.historyService.createHistory({doctor: doctor, patient: patient, appointments: [res.appointment]})
              .then( (data: any)  => {
                                    this.doctorService.updateDoctor(doctor._id, {$push: {history: data.history} })
                                    .then( (data2) => { console.log('history added doc') } );
                                    this.patientService.updatePatient(patient._id, {$push: {history: data.history} }) })
                                      .then( (data) => { console.log('history added patient') } );
          this.calendarService.updateCalendar(doctor.calendar._id, {$push: {appointments: res.appointment}})
          .then( (data) => { console.log('calendar updated') } )
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    }

    updateEvent(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/appointment/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteEvent(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/appointment/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
