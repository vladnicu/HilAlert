import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Hil } from './hil.service';
export interface User {
  id: number;
  username: string;
  hils: Hil[];
  properties: string[];
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

  public authSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private router: Router) { 
    this.authSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('alert_user'))
    );
  }

  public get getAuthValue(): User {
    return this.authSubject.value;
  }

  login(username: string): Observable<User> {
    return this.http.post<User>(environment.apiUrl + '/login', { username }).pipe(
      map((authResponse: User) => {
        if (authResponse) {
          localStorage.setItem('alert_user', JSON.stringify((authResponse)));
          this.authSubject.next(authResponse);
          return authResponse;
        }
      })
    );
  }

  sendHils(username, hils: Array<number>): Observable<any> {
    return this.http.patch<any>(environment.apiUrl + '/users/' + username, { hils });
  }

  logout(): void {
    localStorage.removeItem('alert_user');
    this.router.navigate(['/']);
  }
}
