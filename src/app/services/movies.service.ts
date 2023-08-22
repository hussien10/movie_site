import { Wishlist } from './../interfaces/wishlist';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getTrendy(category:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${category}/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  getDetailes(category:any,id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US
    `)
  }
  getreviews(category:any,id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${category}/${id}/reviews?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)
  }
  getCast(category:any,id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${category}/${id}/credits?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US
    `)
  }
  getMovieCredit(id:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  getTvCredit(id:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  getSimillar(id:number,cat:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${cat}/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)
  }
  search(searchTarget:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=f1aca93e54807386df3f6972a5c33b50&query=${searchTarget}&page=1&include_adult=false`)
  }

  imgError(e:any){
    e.target.src="../assets/images/no-poster-available.jpg";
  }
  constructor(private _HttpClient:HttpClient) { }
}
