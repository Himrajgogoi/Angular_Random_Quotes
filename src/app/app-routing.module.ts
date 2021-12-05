import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [ 
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
