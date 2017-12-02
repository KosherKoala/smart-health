import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {

    constructor(private http: Http) { }

    getAllChats() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/chat')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getChatById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/chat/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createChat(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/chat', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateChat(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/chat/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteChat(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/chat/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

}
