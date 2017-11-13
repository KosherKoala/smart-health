import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getAllUsers() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/user')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getUser(params) {
      return new Promise((resolve, reject) => {
          console.log("serv params", params);
          this.http.post('/api/user/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getUserById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/user/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createUser(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/user', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateUser(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/user/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteUser(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/user/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    isDoctor(id) {
      return new Promise((resolve, reject) => {
        this.http.get('/api/user/isDoctor/' + id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
    }
}
