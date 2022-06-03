import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const API_TOKEN = localStorage.getItem('token');

    const REQUEST_CLONE = request.clone(
      {setHeaders: { Authorization : `Bearer ${API_TOKEN}`}}
      );
  
  
      if((API_TOKEN !== null) && (API_TOKEN !== '')) return next.handle(REQUEST_CLONE);
      
      return next.handle(request);
  }
}
