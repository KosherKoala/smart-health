import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Doctor } from '../../../server/models/index'

@Injectable()
export class DoctorService {
    
    constructor(private http: Http) { }

    getAllDoctors() {
        return new Promise((resolve, reject) => {
          this.http.get('/doctor')
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
      }
    
      getDoctor(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/doctor/' + id)
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
            this.http.post('/doctor', data)
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
            this.http.put('/doctor/'+id, data)
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
            this.http.delete('/doctor/'+id)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
        });
      }
}