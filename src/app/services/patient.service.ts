import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Patient } from '../../../server/models/classes/index';

@Injectable()
export class PatientService {

    constructor(private http: Http) { }

    getAllPatients() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/patient')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getPatient(params) {
      return new Promise((resolve, reject) => {
          console.log("serv params", params);
          this.http.post('/api/patient/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getPatientById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/patient/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createPatient(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/patient', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updatePatient(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/patient/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deletePatient(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/patient/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
