import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any;

  constructor(private http:WeatherService) { }
  showWeather(){
    this.http.getData().subscribe(
      (data:any) => {
        this.data = data;
        console.log(data);
        
      }
    )
  }
}
