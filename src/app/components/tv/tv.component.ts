import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  tvSub!:Subscription
  trendyTv!:Array<any>
  pagination:any
  constructor(private _moviesService:MoviesService) { }
  imgError(e:any){
    this._moviesService.imgError(e)
  }
  ngOnInit(): void {
    this.tvSub=this._moviesService.getTrendy("tv").subscribe(
      response=>{
        this.trendyTv=response.results
      }
    )
  }

}
