import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  errMessage : string = "";
  patientSignUpForm : FormGroup;
  password:String = "";
  confirm_password:String = "";

  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.patientSignUpForm = this.formBuilder.group({
      admin_name : ['',[Validators.required, Validators.minLength(5)]],
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirm_password : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      phone : ['', Validators.required],
      age : ['', Validators.required],
      address : ['', Validators.required]
    })

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.patientSignUpForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }

}
