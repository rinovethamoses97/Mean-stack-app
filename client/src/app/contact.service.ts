import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get("http://localhost:3000/api/contactlist");
  }
  addContact(ab){
       var headers=new HttpHeaders({
        'Content-Type':  'application/json',
      });
      return this.http.post("http://localhost:3000/api/contact",ab, {headers:headers});
  }
  addSample(s){
    var headers=new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("http://localhost:3000/api/sample",s,{headers:headers});
  }
}

