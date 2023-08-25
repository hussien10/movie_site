import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:any;
  loginForm=new UntypedFormGroup({
    email:new UntypedFormControl(null,[Validators.required,Validators.email]),
    password:new UntypedFormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern("^[A-Z][a-z,0-9]{7,10}$")]),
  })
  login(formData:UntypedFormGroup){
    this._AuthService.signin({"email":formData.value.email,"password":formData.value.password}).then(response=>{
        localStorage.setItem("userToken",String(response.user?.refreshToken))
        this._AuthService.safeToken()
        this._Router.navigate(["/home"])

    }).catch(err=>{
      alert(err.message)
    })
  }
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  ngOnInit(): void {
  }


}
