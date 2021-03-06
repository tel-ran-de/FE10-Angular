import {Component, OnInit} from '@angular/core';
import {CityModel} from '../model/CityModel';
import {CityService} from '../services/city.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-city-tiles-container',
  templateUrl: './city-tiles-container.component.html',
  styleUrls: ['./city-tiles-container.component.scss']
})
export class CityTilesContainerComponent implements OnInit {

  cities: CityModel[] = [];

  constructor(private route: ActivatedRoute,
              private cityService: CityService,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
      this.cities = [];
      this.cityService.getCities().subscribe(cities => {
        cities.forEach(city => this.weatherService.getWeather(city.name)
          .subscribe(data => this.cities.push(
            {
              city,
              temp: data.main.temp
            }
          ))
        );
      });
  }

  removeCity(id: string): void {
    console.log(`This city with ${id} will be removed`);
    this.cityService.removeCity(id).subscribe((city) =>
      this.ngOnInit()
    );
  }
}
