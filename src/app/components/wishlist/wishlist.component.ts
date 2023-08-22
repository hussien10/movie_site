import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  favs!:Array<any>
  constructor(private _wishlist:WishlistService) {
      this.favs=this._wishlist.getData()
   }

  ngOnInit(): void {
  }

}
