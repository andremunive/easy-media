import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class CookiesStorageService {
  constructor(private cookieService: CookieService) {}

  getProperty(property: string): string {
    const value = this.cookieService.get(property);
    return value;
  }
}
