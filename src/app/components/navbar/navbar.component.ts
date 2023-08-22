import { WishlistService } from './../../services/wishlist.service';
import { Subscription } from 'rxjs';
import { MoviesService } from './../../services/movies.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false
  searchResult!:Array<any>
  searchSub!:Subscription
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`;
  token:any=localStorage.getItem("userToken")
  favoritesItems!:Array<any>
  constructor(private _AuthService:AuthService,private _MoviesService:MoviesService,private _WishlistService:WishlistService) {
    this._AuthService.userToken.subscribe(()=>{
      if(this._AuthService.userToken.getValue()!=null){
        this.isLogin=true
      }
      else{
        this.isLogin=false
      }
    })
   }
   imgError(e:any){
     this._MoviesService.imgError(e)
   }
   search(e:any){
    let searchTarget=e.target.value
    this.searchSub=this._MoviesService.search(searchTarget).subscribe((res:any)=>{
      this.searchResult=res.results
    })
   }
   logout(){
     this._AuthService.logout()
   }

  ngOnInit(): void {
    // this._WishlistService.showTheWishList(this.token).subscribe(
    //   response=>{
    //     // this.favoritesItems=response;
    //     console.log(new Set(this.favoritesItems))
    //   },
    //   err=>{
    //     console.log(err)
    //   }
    // )
  }

}
