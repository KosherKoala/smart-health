import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Health } from '../../../server/models/classes/index';

@Injectable()
export class HealthService {

    constructor(private http: Http) { }

    getHealthById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/health/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createHealth(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/health', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateHealth(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/health/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteHealth(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/health/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
