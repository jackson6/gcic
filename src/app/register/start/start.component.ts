import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-register-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Input() user: User;

  public error = null;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  signUpWithEmail() {
    this.auth.signUpWithEmail(this.user.email, this.user.password).then((res) => {
      console.log('user created');
    }).catch((err) => console.log(err));
  }

}
