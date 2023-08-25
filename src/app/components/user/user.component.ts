import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userData!:User|any
  email!:any
  constructor(private _AuthService:AuthService,private auth:AngularFireAuth) { }

  ngOnInit(): void {
    this.userData=this?._AuthService.userToken.getValue()
    this.auth.user.subscribe(res=>{
      this.email= res?.email
    })
  }

}
