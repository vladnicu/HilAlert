import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user.service';


export interface Property{
  name: string;
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(environment.apiUrl + '/properties');
  }
  sendProperties(username, properties: Array<number>): Observable<any> {
    return this.http.patch<any>(environment.apiUrl + '/properties/'+ username , {properties});
  }
}
