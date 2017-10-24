import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { User } from '../../../server/models/index'

@Injectable()
export class UserService {
    
    constructor(private http: Http) { }

    getAllUsers() {
        return new Promise((resolve, reject) => {
          this.http.get('/user')
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
      }
    
      showUser(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/user/' + id)
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
            this.http.post('/user', data)
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
            this.http.put('/user/'+id, data)
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
            this.http.delete('/user/'+id)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
        });
      }
}