import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL, LOGIN } from 'src/environments/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient, private route:Router) { }

  login(email : string, password : string){
    return this.http.post(`${API_URL}${LOGIN}`,{email: email, password:password}).toPromise()
  }


}
