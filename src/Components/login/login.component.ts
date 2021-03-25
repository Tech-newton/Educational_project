import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginForm:FormGroup;
  email:string='';
  password:string='';

  constructor(private fb:FormBuilder) {
    this.loginForm=fb.group({
      'email':[null,Validators.compose([Validators.required, Validators.email]) ],
      'password':[null,Validators.required],
    })
   }

   submitMethod(data){
    console.log(data.email, data.password);
   }

  ngOnInit(): void {
  }

}
