import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {AlertService} from '../alert.service';
import {Alert1Service} from '../alert1.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alert = false;

  constructor(private eRef: ElementRef, public alertService: AlertService, public alertService1: Alert1Service) {
    alertService1.event.subscribe((data) => {
      this.alert = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      console.log('clicked');
    } else {
      console.log(this.alert);
      if (this.alert !== false) {
        this.alertService.publish(!this.alert);
        this.alert = !this.alert;
      }
    }
  }

}
