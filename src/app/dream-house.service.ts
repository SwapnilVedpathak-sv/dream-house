import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DreamHouseService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = '';
  readonly fetchUrl = '/expences';

  getList(){
    return this.http.get(`${this.baseUrl}${this.fetchUrl}`)
   }
}
