import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  movieSub!:Subscription
  trendyMovies!:Array<any>
  pagination:any
  constructor(private _moviesService:MoviesService) { }
  imgError(e:any){
    this._moviesService.imgError(e)
  }
  ngOnInit(): void {
    this.movieSub=this._moviesService.getTrendy("movie").subscribe(
      response=>{
        this.trendyMovies=response.results
        this.pagination=response
      }
    )
  }

}
