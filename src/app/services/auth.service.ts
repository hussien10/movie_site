import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken=new BehaviorSubject(null)
  safeToken(){
    let token:any =localStorage.getItem("userToken")
    this.userToken.next(jwtDecode(token))
  }
signup(formData:any):Observable<any>{
  return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",formData)
}
signin(formData:any):Observable<any>{
  return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",formData)
}
logout(){
  this.userToken.next(null)
  localStorage.removeItem("userToken")
  this._Router.navigate(["/login"])
}
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.safeToken()
    }
  }
}
