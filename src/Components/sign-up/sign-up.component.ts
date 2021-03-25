import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  SignUpForm:FormGroup;
  firstName:string='';
  lastName:string='';
  email:string='';
  exampleInputPassword1:string='';
  check:boolean;


  constructor(private fb:FormBuilder, private location: Location) {
    this.SignUpForm=fb.group({
      'email':[null,Validators.compose([Validators.required, Validators.email]) ],
      'exampleInputPassword1':[null,Validators.required],
      'firstName':[null,Validators.required],
      'lastName':[null,Validators.required],
    })
   }

   submitMethod(data){
    console.log(data.email, data.exampleInputPassword1);
   }

   goBack() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
