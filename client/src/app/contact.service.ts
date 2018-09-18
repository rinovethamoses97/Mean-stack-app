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
    return this.http.get("api/contactlist");
  }
  addContact(ab){
       var headers=new HttpHeaders({
        'Content-Type':  'application/json',
      });
      return this.http.post("api/contact",ab, {headers:headers});
  }
  addSample(s){
    var headers=new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("api/sample",s,{headers:headers});
  }
}

