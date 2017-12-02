import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Calendar } from '../../../server/models/classes/index';

@Injectable()
export class CalendarService {

    constructor(private http: Http) { }

    getAllCalendars() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/calendar')
          .map(res => res.json())
          .subscribe(res => { console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getCalendar(params) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/calendar/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getCalendarById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/calendar/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createCalendar(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/calendar', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateCalendar(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/calendar/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    addSlot(id, slot) {
      console.log('adding slot', slot)
      return new Promise((resolve, reject) => {

        const body = {$push: { slots: slot}};

        this.http.put('/api/calendar/' + id, body)
            .map(res => res.json())
            .subscribe(res => {
                  resolve(res);
              }, (err) =>  {
                  reject(err);
              });
        });
    }

    removeAppointment(id, data) {
      console.log('removing appointment', data)
      return new Promise((resolve, reject) => {

        const body = {$pull: { appointments: data}};

        this.http.put('/api/calendar/' + id, body)
            .map(res => res.json())
            .subscribe(res => {
                  resolve(res);
              }, (err) =>  {
                  reject(err);
              });
        });
    }

    requestAppointment(id, data) {
      return new Promise((resolve, reject) => {
        const body = {$push: { appoinments: data.appointment}};

          this.http.put('/api/calendar/' + id, body)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteCalendar(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/calendar/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
