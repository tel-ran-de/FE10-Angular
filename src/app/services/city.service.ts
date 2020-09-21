import {Injectable} from '@angular/core';
import {CityModel} from '../model/CityModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CityDto} from '../dto/CityDto';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {
  }

  getCities(): Observable<CityDto[]> {
    return this.httpClient.get<CityDto[]>('http://localhost:3000/cities');
  }
}
