import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {

    constructor(private http: Http) { }

    getAllNotes() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/note')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getNoteById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/note/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createNote(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/note', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateNote(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/note/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteNote(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/note/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}