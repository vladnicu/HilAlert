import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

export interface Hil{
  machinename: string;
  labcarname: string;
  osversion: string;
  projectname: string;
}


@Injectable({
  providedIn: 'root',
})
export class HilService {
  private _url: string = 'http://localhost:3000/hils';
  constructor(private http: HttpClient) {}

  getHil(): Observable<Hil[]> {
    return this.http.get<Hil[]>(this._url);
  }
}
