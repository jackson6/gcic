import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  constructor() {}

  ngOnInit() {
    console.log(this.user);
  }

}
