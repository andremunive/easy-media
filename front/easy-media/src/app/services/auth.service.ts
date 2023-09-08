import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(user: UserModel) {
    return this.http.post(
      environment.URL_AUTH + environment.host.auth.methods.register,
      user
    );
  }
}
