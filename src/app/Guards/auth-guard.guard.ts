import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

interface TOKEN {
  sub: String;
  roles: String[];
  iss: String;
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const API_TOKEN = localStorage.getItem('token');

    if (API_TOKEN !== null && API_TOKEN !== '') {
      const DECODED_TOKEN: TOKEN = jwtDecode(API_TOKEN);

      const EXPIRATION_DATE = new Date(DECODED_TOKEN.exp * 1000);

      const CURRENT_DATE = new Date();

      if (EXPIRATION_DATE < CURRENT_DATE) {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
        return false;
      }

      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
