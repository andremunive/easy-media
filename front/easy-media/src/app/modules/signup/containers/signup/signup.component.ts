import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalRoutes } from 'src/app/core/enumerations/global-routes-enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
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

  onSubmit() {}
}
