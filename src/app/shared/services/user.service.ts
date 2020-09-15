import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface User {
  id: number;
  username: string;
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
  constructor(private http: HttpClient) { }
  login(username: string): Observable<User> {
    return this.http.post<User>(environment.apiUrl + '/login', { username });
  }
  sendHils(username, hils: Array<number>): Observable<any> {
    return this.http.patch<any>(environment.apiUrl + '/users/' + username, { hils });
  }
}
