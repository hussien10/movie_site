import { UserComponent } from './components/user/user.component';
import { NetworkComponent } from './components/network/network.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailesComponent } from './components/detailes/detailes.component';
import { LoginComponent } from './components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import { TvComponent } from './components/tv/tv.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path:"home",component:HomeComponent,data:{title:"Home",description:"Discover trending movies, TV shows and actors on Noxe.",url:"/home"}},
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"movies",canActivate:[AuthGuard],component:MoviesComponent,data:{title:"Movies",description:"Browse and search thousands of movies on Noxe.",url:"/movies"}},
{path:"tv",canActivate:[AuthGuard],component:TvComponent,data:{title:"TV Shows",description:"Browse and search trending TV shows on Noxe.",url:"/tv"}},
{path:"people",canActivate:[AuthGuard],component:PeopleComponent,data:{title:"People",description:"Discover actors, directors and other film industry talent on Noxe.",url:"/people"}},
{path:"about",canActivate:[AuthGuard],component:AboutComponent,data:{title:"About",description:"Learn more about Noxe, your destination for movies and TV shows.",url:"/about"}},
{path:"network",canActivate:[AuthGuard],component:NetworkComponent,data:{title:"Networks",description:"Browse movies and TV shows by network on Noxe.",url:"/network"}},
{path:"login",component:LoginComponent,data:{title:"Login",description:"Log in to your Noxe account.",url:"/login"}},
{path:"registeration",component:RegisterComponent,data:{title:"Register",description:"Create a Noxe account to save your favorite movies and shows.",url:"/registeration"}},
{path:"detailes/:cat/:id",canActivate:[AuthGuard],component:DetailesComponent},
{path:"user",component:UserComponent,data:{title:"My Account",description:"Manage your Noxe account and watchlist.",url:"/user"}},

{path:"**",component:NotFoundComponent,data:{title:"Page Not Found",description:"The page you're looking for doesn't exist on Noxe."}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
