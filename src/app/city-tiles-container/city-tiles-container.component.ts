import { Component, OnInit } from '@angular/core';
import {CityService} from '../services/city.service';

@Component({
  selector: 'app-city-tiles-container',
  templateUrl: './city-tiles-container.component.html',
  styleUrls: ['./city-tiles-container.component.scss']
})
export class CityTilesContainerComponent implements OnInit {

  public cities = [];

  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data => this.cities = data);
  }
}
