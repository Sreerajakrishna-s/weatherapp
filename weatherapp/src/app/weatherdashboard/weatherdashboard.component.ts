
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weatherdashboard',
  templateUrl: './weatherdashboard.component.html',
  styleUrls: ['./weatherdashboard.component.css'],
  providers: [DatePipe]
})
export class WeatherdashboardComponent implements OnInit {
  
 
  public cityName: string = '';

  // Weather suggestions array
  weatherSuggestions: string[] = [
   
    'Don\'t forget your umbrella today!',
    'Stay warm and cozy inside today!',
    'Enjoy the sunny weather today!',
    'The perfect day for a picnic!'
  ];

  currentTime: Date = new Date();
  greeting: string = '';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
    this.getWeatherData(this.city);
   
  }

  updateTime() {
    this.currentTime = new Date();
    const hours = this.currentTime.getHours();
    this.greeting = hours < 12 ? 'Good morning' : 'Good evening';
  }

  currentWeather: any;
  temperature: number = 0;
  summary: string = '';
  feelsLike: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  visibility: number = 0;
  wind: number = 0;
  city: string = 'Madurai';
  newCity: string = '';
  constructor(private weatherservice: WeatherService){}

  getWeatherData(city: string) {
    this.weatherservice.getWeather(city).subscribe({
      next: (res) => {
        console.log(res);
        this.currentWeather = res;
        this.temperature = this.currentWeather.main.temp;
        this.summary = this.currentWeather.weather[0].main;
        this.feelsLike = this.currentWeather.main.feels_like;
        this.humidity = this.currentWeather.main.humidity;
        this.pressure = this.currentWeather.main.pressure;
        this.visibility = this.currentWeather.visibility;
        this.wind = this.currentWeather.wind.speed;
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed successfully')
    });
  }

  onSearch() {
    this.getWeatherData(this.city);
    this.newCity = this.city;
  }

  // Returns a random suggestion from the weatherSuggestions array
  getWeatherSuggestion(): string {
    const index = Math.floor(Math.random() * this.weatherSuggestions.length);
    return this.weatherSuggestions[index];
  }
}
