import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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

import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { AlertsComponent } from './navbar/alerts/alerts.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBuUlhtCyLpSJPfmLDnFNYe6TAHbYDJ7mg',
  authDomain: 'invest-ff3f4.firebaseapp.com',
  databaseURL: 'https://invest-ff3f4.firebaseio.com',
  projectId: 'invest-ff3f4',
  storageBucket: '',
  messagingSenderId: '798199281515'
};

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
    DashboardComponent,
    BasicComponent,
    StartComponent,
    AlertsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    WavesModule,
    NgxStripeModule.forRoot('pk_test_sMWQj8OXfAe1S5VmvchUBsVh'),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
