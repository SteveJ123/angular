import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://loginuserdisplay.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      
    } )
  };

  getdata() {
 
    return this.http.get(`${this.configUrl}/users`,this.httpOptions);
 }
}
