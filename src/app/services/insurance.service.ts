import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Insurance } from '../../../server/models/classes/index';

@Injectable()
export class InsuranceService {

    constructor(private http: Http) { }

    getAllInsurances() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/insurance')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getInsuranceById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/insurance/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createInsurance(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/insurance', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateInsurance(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/insurance/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteInsurance(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/insurance/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
