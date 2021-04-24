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
  addExpences(expences: object) {
    return this.http.post<any>(`${this.baseUrl}${this.ImageURL}`, expences)
  }
  updateExpences(id:any,data:any){
    return this.http.put(`${this.baseUrl}${this.fetchUrl}/${id}`,data)
  }
}
