import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeSignupComponent } from './components/employee-signup/employee-signup.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientLoginComponent,
    EmployeeLoginComponent,
    PatientSignupComponent,
    EmployeeSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
