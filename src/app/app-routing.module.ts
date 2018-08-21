import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {PaymentComponent} from './payment/payment.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import {BasicComponent} from './register/basic/basic.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'pay',
    component: PaymentComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
