import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
// import SwiperCore, { Autoplay } from "swiper/core";
// SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CastComponent implements OnInit {
  @Input() title!:Array<any>;
  casts!:any
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  constructor(private _MoviesServices:MoviesService) { }
  imgError(e:any){
    this._MoviesServices.imgError(e)
  }
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  ngOnInit(): void {
    this._MoviesServices.getCast(this.title[0],this.title[1]).subscribe(response=>{
      this.casts=response
    })
  }

}
