import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';
// import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss']
})
export class DetailesComponent implements OnInit,OnDestroy {
   constructor(private _moviesService:MoviesService,private _ActivatedRoute:ActivatedRoute,private _router:Router,private _seoService:SeoService) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  movieDetailes:any
  movieSub!:Subscription
  vote!:number;
  cat:any
  id:any
  name!:any

  imgError(e:any){
    this._moviesService.imgError(e)
  }
  ngOnInit(): void {
    this.cat=this._ActivatedRoute?.snapshot.params.cat
  this.id=this._ActivatedRoute?.snapshot.params.id
    this.movieSub=this._moviesService.getDetailes(this.cat,this.id).subscribe(response=>{
      this.movieDetailes=response
      this.vote=Math.floor(this.movieDetailes.vote_average/2)

      const displayName = this.movieDetailes?.original_name || this.movieDetailes?.original_title || this.movieDetailes?.name;
      const description = (this.movieDetailes?.overview || this.movieDetailes?.biography || '').slice(0, 160);
      const image = this.movieDetailes?.poster_path || this.movieDetailes?.profile_path;
      this._seoService.update({
        title: displayName,
        description: description || `View details for ${displayName} on Noxe.`,
        image: image ? `${this.imagePaseUrl}${image}` : undefined,
        url: `/detailes/${this.cat}/${this.id}`
      })

    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.movieSub.unsubscribe()
  }
}
