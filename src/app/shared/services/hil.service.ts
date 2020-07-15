import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Hil } from 'src/app/authorized/hils/components/Hil';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HilService {
  private _url :string = "http://localhost:3000/hils";
  constructor(private http: HttpClient) { }

  getHil() : Observable <Hil []>{
    return this.http.get<Hil []>(this._url);
  }
}
