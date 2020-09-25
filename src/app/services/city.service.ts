import {Injectable} from '@angular/core';
import {CityModel} from '../model/CityModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CityDto} from '../dto/CityDto';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityUrl = 'http://localhost:3000/cities';

  constructor(private httpClient: HttpClient) {
  }

  getCities(): Observable<CityDto[]> {
    return this.httpClient.get<CityDto[]>(this.cityUrl);
  }

  getCitiesByName(cityName: string): Observable<CityDto> {
    // return this.httpClient.get<CityDto>(this.cityUrl + '?name=' + cityName);
    return this.getCities().pipe(
      map(cities => cities.find(city => city.name === cityName))
    );
  }

  addCity(cityDto: CityDto): Observable<CityDto> {
    return this.httpClient.post<CityDto>(this.cityUrl, cityDto);
  }

  removeCity(cityName: string): void {
    this.httpClient.delete(this.cityUrl + '/name/' + cityName).subscribe(data => {
      console.log(data);
    });
  }
}
