import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrls: ['./city-tile.component.scss']
})
export class CityTileComponent implements OnInit {

  @Input()
  city: string;

  @Input()
  imageUrl: string;

  @Input()
  path: string;

  @Input()
  temperature: number = this.weatherService.getTemperature(this.city);

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.setPathIfNotEmpty();
  }

  setPathIfNotEmpty(): void {
    this.path = this.path ? this.path : 'city/' + this.city;
  }

}
