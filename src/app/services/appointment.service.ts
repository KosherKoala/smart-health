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

    getAllAppointments() {
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

    // createAppointment(data) {
    //   return new Promise((resolve, reject) => {
    //       this.http.post('/api/appointment', data)
    //         .map(res => res.json())
    //         .subscribe(res => {
    //           resolve(res);
    //         }, (err) => {
    //           reject(err);
    //         });
    //   });
    // }

    makeAppointment(appointment, doctor, patient) {
      console.log('making appointment', appointment)

      return new Promise((resolve, reject) => {
        this.http.post('/api/appointment', appointment)
        .map(res => res.json())
        .subscribe(res => {

          if (patient.history.length > 0) {
            for ( let i = 0 ; i < patient.history.length; i++) {
              if (patient.history[i].doctor._id === doctor._id) {
                console.log('history found');
                this.historyService.updateHistory(patient.history[i]._id, {$push: {appointments: res.appointment}})
                  .then( (data) => { console.log('history updated') } )
                this.calendarService.updateCalendar(doctor.calendar._id, {$push: {appointments: res.appointment}})
                  .then( (data) => { console.log('calendar updated') } )
                resolve(res);
              } else if ( i === patient.history.length - 1 ) {
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
              }
            }
          } else {
            this.historyService.createHistory({doctor: doctor, patient: patient, appointments: [res.appointment]})
            .then( (data: any)  => {
                                  this.doctorService.updateDoctor(doctor._id, {$push: {history: data.history} })
                                  .then( (data2) => { console.log('history added doc') } );
                                  this.patientService.updatePatient(patient._id, {$push: {history: data.history} }) })
                                    .then( (data) => { console.log('history added patient') } );
            this.calendarService.updateCalendar(doctor.calendar._id, {$push: {appointments: res.appointment}})
            .then( (data) => { console.log('calendar updated') } )
            resolve(res);
          }
        }, (err) => {
          reject(err);
        });
      });
    }

    updateAppointment(id, data) {
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

    deleteAppointment(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/appointment/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    denyAppointment(id, message) {
      return new Promise((resolve, reject) => {

        const body = {$set: { isPending: false, isActive: false, message: message}};

        this.http.put('/api/appointment/' + id, body)
        .map(res => res.json())
        .subscribe(res => 
          {
          resolve(res);
        }, (err) => 
        {
          reject(err);
        });
    });
    }

    acceptAppointment(id, message) {
      console.log('accepting appointment')
      return new Promise((resolve, reject) => {

        const body = {$set: { isPending: false, message: message}};

        this.http.put('/api/appointment/' + id, body)
            .map(res => res.json())
            .subscribe(res => 
              {
                  resolve(res);
              }, (err) => 
              {
                  reject(err);
              });
        });
    }

    completeAppointment(id, message) {
      return new Promise((resolve, reject) => {
        const body = {$set: { isCompleted: true, message: message}};

        this.http.put('/api/appointment/' + id, body)
            .map(res => res.json())
            .subscribe(res => 
              {
                  resolve(res);
              }, (err) => 
              {
                  reject(err);
              });
        });
    }

    cancelAppointment(id, message) {
      return new Promise((resolve, reject) => {
        const body = {$set: { isActive: false, message: message }};

        this.http.put('/api/appointment/' + id, body)
            .map(res => res.json())
            .subscribe(res => 
              {
                  resolve(res);
              }, (err) => 
              {
                  reject(err);
              });
        });
    }

    setMessage(id, data) {
      return new Promise((resolve, reject) => {

        const body = {$push: { message: data.message }};

        this.http.put('/api/appointment/' + id, body)
            .map(res => res.json())
            .subscribe(res => 
              {
                  resolve(res);
              }, (err) => 
              {
                  reject(err);
              });
        });
    }
}
