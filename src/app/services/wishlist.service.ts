import { Injectable } from '@angular/core';
import { Wishlist } from '../interfaces/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  favs:any=[]
  flag=false
  constructor() { }
  setData(fav:Wishlist){
    if(this.favs.length!=0){
      // for(let i=0;i<this.favs.length;i++){
      //   if(fav.movieID==this.favs[i].movieID){
      //     this.favs.splice(i,1)

      //     return;
      //   }
      // }
       this.favs.forEach((item:any,key:any) => {
        if(fav.movieID==item.movieID){
          this.favs.splice(key,1)
              this.flag=true
              console.log(this.favs)

              return
         }

      });

    }
    if(this.flag==true){
      this.flag=false
      return
    }
      this.favs.push(fav)
      console.log(this.favs)

  }
  // deleteFav(flag:boolean,index:number){
  //   if(flag==true){
  //     this.favs.splice(index,1)
  //   }
  // }
  getData(){
    return this.favs
  }
  // addToWishList(data:Wishlist){
  //   return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/addToFavorites`,data)
  // }
  // showTheWishList(token:any){
  //   return this._HttpClient.get(`https://route-egypt-api.herokuapp.com/getFavorites`,{headers:{
  //     token:token
  //   }})

  // }
}
