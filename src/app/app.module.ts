import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CityTileComponent} from './city-tile/city-tile.component';
import {CityWeatherComponent} from './city-weather/city-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CityTileComponent,
    CityWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
