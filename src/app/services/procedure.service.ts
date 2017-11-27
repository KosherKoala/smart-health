import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Procedure } from '../../../server/models/classes/index';

@Injectable()
export class ProcedureService {

    constructor(private http: Http) { }

    getAllProcedures() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/procedure')
          .map(res => res.json())
          .subscribe(res => { console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getProcedure(params) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/procedure/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getProcedureById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/procedure/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createProcedure(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/procedure', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateProcedure(id, data) {
      console.log('updating procedure')
      return new Promise((resolve, reject) => {
          this.http.put('/api/procedure/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteProcedure(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/procedure/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
