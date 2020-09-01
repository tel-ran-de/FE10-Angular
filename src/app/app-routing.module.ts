import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CityWeatherComponent} from './city-weather/city-weather.component';
import {CityTilesContainerComponent} from './city-tiles-container/city-tiles-container.component';

const routes: Routes = [
  {
    path: '',
    component: CityTilesContainerComponent
  },
  {
    path: 'city',
    component: CityWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
