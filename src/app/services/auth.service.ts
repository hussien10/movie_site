import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken=new BehaviorSubject(null)
  safeToken(){
    let token:any =localStorage.getItem("userToken")
    this.userToken.next(token)
  }
signup(user:{email:string,password:string}){
  //return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",formData)
  return this.auth.createUserWithEmailAndPassword(user.email,user.password)
}
signin(user:{email:string,password:string}){
  // return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",formData)
  return this.auth.signInWithEmailAndPassword(user.email,user.password)
}
logout(){
  this.auth.signOut()
  this.userToken.next(null)
  localStorage.removeItem("userToken")
  this._Router.navigate(["/login"])
}
getUserData():any{
  this.auth.user.subscribe(res=>{
    return res?.email
  })
}
  constructor(private _HttpClient:HttpClient,private _Router:Router,private auth:AngularFireAuth) {
    if(localStorage.getItem("userToken")!=null){
      this.safeToken()
    }
  }
}
