import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Appointment } from '../../../server/models/classes/index';
import { PatientService } from './patient.service'
import { CalendarService } from './calendar.service'
import { HistoryService } from './history.service'

@Injectable()
export class AppointmentService {

    constructor(private http: Http,
                private patientService: PatientService,
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

    makeAppointment(appointment, calendar, history) {
      console.log('makeing appointment', appointment, calendar, history)
      
      return new Promise((resolve, reject) => {
        this.http.post('/api/appointment', appointment)
        .map(res => res.json())
        .subscribe(res => {
          this.historyService.updateHistory(history, {$push: {appointments: res.appointment}}).then()
          this.calendarService.updateCalendar(calendar, {$push: {appointments: res.appointment}}).then()
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
