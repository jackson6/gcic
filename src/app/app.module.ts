import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { NgxStripeModule } from 'ngx-stripe';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicComponent } from './register/basic/basic.component';
import { StartComponent } from './register/start/start.component';

import { AlertsComponent } from './navbar/alerts/alerts.component';
import {AuthGuard} from './auth.guard';
import { ChatComponent } from './chat/chat.component';
import { environment } from '../environments/environment';
import { Basic1Component } from './register/basic1/basic1.component';
import { Basic2Component } from './register/basic2/basic2.component';
import { CompletedComponent } from './register/completed/completed.component';
import { MessageComponent } from './chat/message/message.component';
import { UserComponent } from './chat/user/user.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {ChatService} from './chat/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    TestimonialsComponent,
    AboutComponent,
    ContactComponent,
    PaymentComponent,
    AlertsComponent,
    DashboardComponent,
    BasicComponent,
    StartComponent,
    ChatComponent,
    Basic1Component,
    Basic2Component,
    CompletedComponent,
    MessageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot(environment.stripeKey),
    MDBBootstrapModule.forRoot(),
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthGuard,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
