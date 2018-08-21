import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {ChatService} from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private auth: AuthService, private chatService: ChatService) {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {
    this.chatService.sendMessage('test')
  }

  ngOnDestroy(): void {
  }
}
