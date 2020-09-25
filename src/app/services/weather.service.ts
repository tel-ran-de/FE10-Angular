import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private API_KEY = '583f2ae13fb30818f5d376a09379e51a';

  constructor(private httpClient: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${(this.API_KEY)}`);
  }
}
