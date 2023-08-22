import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  actorSub!:Subscription
  trendyActors!:Array<any>
  pagination:any
  constructor(private _moviesService:MoviesService) { }
  imgError(e:any){
    this._moviesService.imgError(e)
  }
  ngOnInit(): void {
    this.actorSub=this._moviesService.getTrendy("person").subscribe(
      response=>{
        this.trendyActors=response.results
      }
    )
  }

}
