import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface User {

  username: string;
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
}
