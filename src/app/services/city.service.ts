import { Injectable } from '@angular/core';
import {CityModel} from '../model/CityModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Observable<CityModel> {
    return null;
  }
}
