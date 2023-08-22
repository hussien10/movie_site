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
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
    this.userData=this?._AuthService.userToken.getValue()
    console.log(this.userData)
  }

}
