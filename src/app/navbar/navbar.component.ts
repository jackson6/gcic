import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from './alerts/alert.service';
import {Alert1Service} from './alerts/alert1.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  about_active = false;
  contact_active = false;
  testimonial_active = false;
  member_active = false;
  home_active = false;
  login_active = false;
  route: any;
  alert = false;
  forgetSuccess = false;

  constructor(private _route: ActivatedRoute, public alertService: AlertService,
              public alertService1: Alert1Service, public auth: AuthService) {
    this.route = _route;

    alertService.event.subscribe((data) => {
      this.alert = data;
    });
  }

  ngOnInit() {
    switch (this.route.snapshot._routerState.url) {
      case '/':
        this.home_active = true;
        break;
      case 'login':
        this.login_active = true;
    }
  }

  getAlertCount() {
    return 2;
  }

  showAlert() {
    if (this.alert) {
      this.alert = false;
    } else {
      this.alert = true;
    }
    this.alertService1.publish(this.alert);
  }

  logout() {
    this.auth.logout();
  }

}
