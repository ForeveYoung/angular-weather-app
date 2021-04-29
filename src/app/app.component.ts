import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any;
  error:any;
  visible: boolean = false

  constructor(private http:WeatherService) { }
  showWeather(city:any){
    this.http.getData(city).subscribe(
      (data:any) => {
        this.data = data;
        data.main.temp = (Math.round(data.main.temp - 273.15));
        data.main.feels_like = (Math.round(data.main.feels_like - 273.15));
        if (data.main.temp > 0){
          data.main.temp = '+' + data.main.temp;
        }
        if (data.main.feels_like > 0){
          data.main.feels_like = '+' + data.main.feels_like;
        }
        console.log(this.data);
        this.visible = true;

      },
      (error:any) => {
        this.error = error;
        alert('Invalid name of city. Please, check the city name')
      }
    )
  }
}