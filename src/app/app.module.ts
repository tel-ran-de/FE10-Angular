import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityTileComponent } from './city-tile/city-tile.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CityTilesContainerComponent } from './city-tiles-container/city-tiles-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CityTileComponent,
    CityWeatherComponent,
    CityTilesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
