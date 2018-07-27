import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  forgetForm: FormGroup;
  forgetSuccess: boolean;
  user: User = new User();

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      loginFormEmail: ['', [Validators.required, Validators.email]],
      loginFormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.forgetForm = fb.group({
      forgetFormEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.forgetSuccess = false;
  }

  onSubmit(): void {
  }

}
