import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CityTileComponent} from './city-tile/city-tile.component';
import {CityWeatherComponent} from './city-weather/city-weather.component';
import {CityTilesContainerComponent} from './city-tiles-container/city-tiles-container.component';
import {AddCityFormComponent} from './add-city-form/add-city-form.component';
import {AddCityTileComponent} from './add-city-tile/add-city-tile.component';
import {CityComponent} from './service/city/city.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CityTileComponent,
    CityWeatherComponent,
    CityTilesContainerComponent,
    AddCityFormComponent,
    AddCityTileComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
