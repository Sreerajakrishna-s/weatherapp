import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6a7ccd012518ec1402865e55e1f8eadf&units=metric');
  }
}