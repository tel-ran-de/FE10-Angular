import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const apiKey: string = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  /*URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';*/

  constructor(private http: HttpClient) {
  }

  getWeather(cityName: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/forecast?q=${cityName}&appid=${apiKey}&units=metric`);
  }

  getTemperature(cityName: string): Subscription {
    return this.getWeather(cityName).subscribe(data => data.main.temp);

  }
}
