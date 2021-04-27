import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=35a0f6738c93c3c929ec30bbb3f53f1a')
  }

}


