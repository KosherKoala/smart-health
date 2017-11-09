import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Appointment } from '../../../server/models/classes/index';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

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
