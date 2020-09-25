import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CityModel} from '../model/CityModel';
import {CityService} from '../services/city.service';
import {CityDto} from '../dto/CityDto';
import {flatMap} from 'rxjs/operators';
import {WeatherService} from '../services/weather.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  city: CityModel = {
    name: null,
    imageUrl: null,
    temp: null

  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cityService: CityService,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      flatMap(params => this.cityService.getCitiesByName(params.name))
    ).subscribe((city: CityDto) =>
      this.weatherService.getWeather(city.name)
        .subscribe(data => {
            this.city.name = city.name;
            this.city.imageUrl = city.imageUrl;
            this.city.temp = data.main.temp;
          }
        ));
  }
  onClick(): void {
    this.cityService.removeCity(this.city.name);
    this.router.navigate(['']);
  }

}
