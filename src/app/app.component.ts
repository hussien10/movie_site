import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'noxe';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService
  ) { }

  ngOnInit(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this._activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data && data['title']) {
        this._seoService.update({
          title: data['title'],
          description: data['description'],
          url: data['url']
        });
      }
    });
  }
}
