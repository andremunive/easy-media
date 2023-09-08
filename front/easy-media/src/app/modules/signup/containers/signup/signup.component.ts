import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalRoutes } from 'src/app/core/enumerations/global-routes-enum';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from '../../../../core/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  goToLogin() {
    this.router.navigate([GlobalRoutes.LOGIN_PAGE]);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      let userInfo: UserModel = {
        fullName: this.signupForm.get('fullName')?.value,
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
      };
      console.log('DATA => ', userInfo);
      this.authService.registerUser(userInfo).subscribe((res) => {
        console.log('DONE => ', res);
      });
    }
  }
}
