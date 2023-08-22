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
  path:"home",component:HomeComponent},
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
{path:"tv",canActivate:[AuthGuard],component:TvComponent},
{path:"people",canActivate:[AuthGuard],component:PeopleComponent},
{path:"about",canActivate:[AuthGuard],component:AboutComponent},
{path:"network",canActivate:[AuthGuard],component:NetworkComponent},
{path:"login",component:LoginComponent},
{path:"registeration",component:RegisterComponent},
{path:"detailes/:cat/:id",canActivate:[AuthGuard],component:DetailesComponent},
{path:"user",component:UserComponent},

{path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
