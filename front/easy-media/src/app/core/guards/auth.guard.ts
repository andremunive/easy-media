import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookiesStorageService } from 'src/app/services/cookies.service';
import { GlobalRoutes } from '../enumerations/global-routes-enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookiesService: CookiesStorageService
  ) {}

  canActivate(): boolean {
    const userToken = this.cookiesService.getProperty('userToken');

    if (!userToken) {
      return true;
    } else {
      this.router.navigate([GlobalRoutes.LOGIN_PAGE]);
      return false;
    }
  }
}
