import { MoviesService } from './../../services/movies.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CreditsComponent implements OnInit ,OnDestroy {
  @Input ()id!:number
  @Input ()name!:string
  movieCredits!:any
  tvCredits!:any
  moviesub!:Subscription
  tvsub!:Subscription
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  noPoster='../../../assets/images/no-poster-available.jpg'
  constructor(private _MovieService:MoviesService) { }
  imgError(e:any){
    this._MovieService.imgError(e)
  }
  ngOnInit(): void {
   this.moviesub= this._MovieService.getMovieCredit(this.id).subscribe(response=>{
      this.movieCredits=response
    })

    this.tvsub=this._MovieService.getTvCredit(this.id).subscribe(response=>{
      this.tvCredits=response
    })
  }
  ngOnDestroy(): void{
    this.moviesub.unsubscribe()
    this.tvsub.unsubscribe()

  }

}
