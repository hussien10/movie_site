import { MoviesService } from './../../services/movies.service';
import { Subscription } from 'rxjs';
import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simillar',
  templateUrl: './simillar.component.html',
  styleUrls: ['./simillar.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SimillarComponent implements OnInit {
  @Input() id!:number
  @Input() cat!:string
  @Input() name!:string
  simillar!:Array<any>
  simSub!:Subscription
  imagePaseUrl:string=`https://image.tmdb.org/t/p/w500`
  constructor(private _MoviesService:MoviesService) { }
  imgError(e:any){
    this._MoviesService.imgError(e)
  }
  ngOnInit(): void {
    this.simSub=this._MoviesService.getSimillar(this.id,this.cat).subscribe((res:any)=>{
      this.simillar=res.results
    })
  }

}
