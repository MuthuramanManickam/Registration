import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  appUrl= "http://localhost:3000/";
  constructor(private httpClient:HttpClient) { }

  insertData(data:any){
    return this.httpClient.post(this.appUrl+'registration/signupuser',data)
  }
}
