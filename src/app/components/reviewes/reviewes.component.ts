import { MoviesService } from '../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewes',
  templateUrl: './reviewes.component.html',
  styleUrls: ['./reviewes.component.scss']
})
export class ReviewesComponent implements OnInit {
@Input() title!:Array<any>;
reviews!:any;
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getreviews(this.title[0],this.title[1]).subscribe(response=>{
      this.reviews=response
    })
  }

}
