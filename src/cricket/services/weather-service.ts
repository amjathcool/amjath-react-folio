// src/services/weatherService.ts

const API_KEY = '938bf51ae608f6a282aa2dc147790832'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherForecast {
  dt: number;
  dt_txt: string;
  weather: WeatherCondition[];
}

interface WeatherAPIResponse {
  list: WeatherForecast[];
}

export async function fetchWeatherForecastByZipcode(zipcode: string = '43035'): Promise<WeatherForecast[]> {
  try {
    const response = await fetch(`${BASE_URL}?zip=${zipcode},us&appid=${API_KEY}&units=imperial`);
    if (!response.ok) throw new Error('Failed to fetch weather data');
    const data: WeatherAPIResponse = await response.json();
    return data.list;
  } catch (error) {
    console.error('Weather API Error:', error);
    return [];
  }
}
