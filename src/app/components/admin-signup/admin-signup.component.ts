import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  errMessage : string = "";
  adminSignUpForm : FormGroup;
  password:String = "";
  confirm_password:String = "";

  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.adminSignUpForm = this.formBuilder.group({
      admin_name : ['',[Validators.required, Validators.minLength(5)]],
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirm_password : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      phone : ['', Validators.required]
    })

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.adminSignUpForm.value)
    // this.employeeDetailService.createEmployee(this.adminSignUpForm.value).subscribe();
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }


}
