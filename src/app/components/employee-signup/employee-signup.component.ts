import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-signup',
  templateUrl: './employee-signup.component.html',
  styleUrls: ['./employee-signup.component.css']
})
export class EmployeeSignupComponent implements OnInit {

  // employees : Employee [] = []
  errMessage : string = "";
  employeeForm : FormGroup;

  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.employeeForm = this.formBuilder.group({
      id : ['',Validators.required],
      first_name : ['',[Validators.required,Validators.minLength(5)]],
      last_name : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]]
    })

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.employeeForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
  }




}
