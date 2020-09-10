import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hil } from './hil.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Property } from './property.service';

export interface User {
  username: string;
  hils: Hil[];
  properties: Property[];
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(username: string): Observable<User> {
    return this.http.post<User>(environment.apiUrl + '/login', {username});
  }

  sendHils(username: string): Observable<User> {
    return this.http.patch<User>(environment.apiUrl + '/user/${id}', {username});
  }
}
