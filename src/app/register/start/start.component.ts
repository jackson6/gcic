import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-register-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

  next() {
    this.user.reg_state = 1;
  }

}
