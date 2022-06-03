import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITokenAuth } from '../Models/itoken-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private apiUrl = environment.apiUrl;
  
  constructor(private http : HttpClient,) { };

  //! Should handle the error
  public logUser(username: string, password: string): Observable<string>{
    const body = {
      "username": username,
      "password": password
    };
    return this.http.post<ITokenAuth>(`${this.apiUrl}/api/players/sign-in`, body )
    .pipe(
      map( (response: ITokenAuth) => response.token)
    );
  };
}
