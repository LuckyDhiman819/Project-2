import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {


  patientLoginForm : FormGroup;

  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    this.patientLoginForm = this.formBuilder.group({
    id : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  saveEmployee(){
    console.log(this.patientLoginForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();

  constructor() { }

  ngOnInit(): void {

  }

}
