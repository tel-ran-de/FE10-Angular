import {Injectable} from '@angular/core';
import {CityModel} from '../model/CityModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {
  }

  getCities(): Observable<CityModel[]> {
    return this.http.get<CityModel[]>('http://localhost:3000/cities');
  }
}
