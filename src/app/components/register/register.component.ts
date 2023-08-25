import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:any=''
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  registerationForm=new UntypedFormGroup({
    first_name:new UntypedFormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new UntypedFormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new UntypedFormControl(null,[Validators.required,Validators.email]),
    age:new UntypedFormControl(null,[Validators.required,Validators.min(16),Validators.max(100)]),
    password:new UntypedFormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern("^[A-Z][a-z,0-9]{7,10}$")]),
  })
  regist(registerationForm:UntypedFormGroup){
    this._AuthService.signup({"email":registerationForm.value.email,"password":registerationForm.value.password}).then(result=>{
        this._Router.navigate(["/login"])

      console.log(registerationForm.value)

    }).
    catch(err=>{
      alert(err.message)
    })
  }
  ngOnInit(): void {
  }

}
