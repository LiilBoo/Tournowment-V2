import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private apiUrl = environment.apiUrl;
  
  constructor(private http : HttpClient,) { };

  public logUser(username: string, password: string){
    const body = {
      "username": username,
      "password": password
    };
    return this.http.post(`${this.apiUrl}/api/players/sign-in`, body );
  };
}
