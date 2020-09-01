import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hil } from './hil.service';

export interface User {

  username: string;
  hils: Hil[];
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http: HttpClient) { 


  }
  
  login(data ){
    return this.http.post<User>('http://hilalertbackend.test/api/login', data, httpOptions);
    //return this.http.post('http://hilalertbackend.test/api/login', data as User);
  }

  
  sendUser(data ){
    console.log('request sent!');
    return this.http.post<User>('http://hilalertbackend.test/api/username', data, httpOptions);
    //return this.http.post('http://hilalertbackend.test/api/login', data as User);
  }
}
