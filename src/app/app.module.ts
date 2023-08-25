import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { PeopleComponent } from './components/people/people.component';
import { DetailesComponent } from './components/detailes/detailes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { NetworkComponent } from './components/network/network.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ReviewesComponent } from './components/reviewes/reviewes.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CastComponent } from './components/cast/cast.component';
import { CreditsComponent } from './components/credits/credits.component';
import { SimillarComponent } from './components/simillar/simillar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UserComponent } from './components/user/user.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    DetailesComponent,
    NotFoundComponent,
    AboutComponent,
    NetworkComponent,
    ReviewesComponent,
    CastComponent,
    CreditsComponent,
    SimillarComponent,
    WishlistComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    NzRateModule,
    FormsModule,
    NzPaginationModule,
    NzIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NzCarouselModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
