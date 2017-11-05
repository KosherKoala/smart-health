import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
<<<<<<< HEAD
import { Insurance } from '../../../server/models/classes/index';
=======
import { Insurance } from '../../../server/models/index'
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34

@Injectable()
export class InsuranceService {

    constructor(private http: Http) { }

<<<<<<< HEAD
=======
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

>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
