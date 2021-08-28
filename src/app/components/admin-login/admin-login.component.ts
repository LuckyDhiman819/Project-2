import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm : FormGroup;

  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    this.adminLoginForm = this.formBuilder.group({
    id : ['', Validators.required],
    password : ['', Validators.required]
    })
  }
  saveEmployee(){
    console.log(this.adminLoginForm.value)
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
  }

}
