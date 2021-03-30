import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DreamHouseService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:8000';
  readonly fetchUrl = '/expences';
  readonly ImageURL = '/imageUpload'

  getList(){
    return this.http.get(`${this.baseUrl}${this.fetchUrl}`)
   }
}
