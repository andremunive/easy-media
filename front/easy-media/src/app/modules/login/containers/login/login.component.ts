import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalRoutes } from 'src/app/core/enumerations/global-routes-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
    }
  }

  goToSignUp() {
    this.router.navigate([GlobalRoutes.SIGNUP_PAGE]);
  }
}
