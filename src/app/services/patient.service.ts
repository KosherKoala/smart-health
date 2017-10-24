import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Patient } from '../../../server/models/index'

@Injectable()
export class PatientService {
    
    constructor(private http: Http) { }

    getAllPatients() {
        return new Promise((resolve, reject) => {
          this.http.get('/patient')
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
      }
    
      getPatient(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/patient/' + id)
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
            this.http.post('/patient', data)
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
            this.http.put('/patient/'+id, data)
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
            this.http.delete('/patient/'+id)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
        });
      }
}