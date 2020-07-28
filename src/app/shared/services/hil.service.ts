import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

export interface Hil{
  machinename: string;
  labcarname: string;
  osversion: string;
  projectname: string;
  date: string;
}


@Injectable({
  providedIn: 'root',
})
export class HilService {
  private url = 'https://my-json-server.typicode.com/vladnicu/HilAlert/hils';
  constructor(private http: HttpClient) {}

  getHil(): Observable<Hil[]> {
    return this.http.get<Hil[]>(this.url);
  }
}
