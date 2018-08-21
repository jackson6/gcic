import { Component, OnInit } from '@angular/core';

import {User} from '../models/user';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forgetSuccess: boolean;
  user: User = new User();
  forget: User = new User();

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.forgetSuccess = false;
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#loginForm-uid').value;
    const password = target.querySelector('#loginForm-password').value;
    this.auth.signInWithEmail(username, password)
      .then((res) => {
        this.auth.getUser().then(() => {
          this.router.navigate(['dashboard']);
        }).catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.auth.signInWithFacebook()
      .then((res) => {
        this.auth.getUser().then(() => {
          this.router.navigate(['dashboard']);
        }).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle()
      .then((res) => {
        this.auth.getUser().then((resp) => {
          console.log(resp);
          this.router.navigate(['dashboard']);
        });
      })
      .catch((err) => console.log(err));
  }

  forgetMember() {
    if (this.forget.email === undefined) {
      console.log('empty email');
    }
  }

  forgetPassword() {
    if (this.forget.uid === undefined) {
      console.log('empty member uid');
    }
  }

}
