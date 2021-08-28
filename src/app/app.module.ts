import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    EmployeeLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
