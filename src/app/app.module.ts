import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
=======

import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';

>>>>>>> ae60bc0112681cd33543f7738d0565e9a532d522

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    PatientLoginComponent
=======
    PatientLoginComponent,
    EmployeeLoginComponent,
    PatientSignupComponent

>>>>>>> ae60bc0112681cd33543f7738d0565e9a532d522
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
