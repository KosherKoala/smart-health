import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { History } from '../../../server/models/classes/index';

@Injectable()
export class HistoryService {

    constructor(private http: Http) { }

    getAllHistories() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/history')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getHistory(params) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/history/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    getHistoryById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/history/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createHistory(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/history', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateHistory(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/history/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    addChat(id, chat) {
      return new Promise((resolve, reject) => {
        this.updateHistory(id, {$push: {chat: chat} })
          .then(data => {console.log('chat', data);   resolve(data) } )
      });
    }

    deleteHistory(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/history/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
