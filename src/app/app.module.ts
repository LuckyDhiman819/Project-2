import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminSignupComponent,
    PatientSignupComponent,
    PatientLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
