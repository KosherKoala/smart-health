import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Doctor } from '../../../server/models/classes/index';

@Injectable()
export class DoctorService {

    constructor(private http: Http) { }

    getAllDoctors() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/doctor')
          .map(res => res.json())
          .subscribe(res => { console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getDoctor(params) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/doctor/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getDoctorById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/doctor/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createDoctor(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/doctor', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateDoctor(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/doctor/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteDoctor(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/doctor/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
