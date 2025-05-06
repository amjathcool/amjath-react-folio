import { useQuery } from '@tanstack/react-query';
import { fetchWeatherForecastByZipcode, WeatherForecast } from '../services/weather-service';

export function useWeatherForecast(zipcode: string) {
  return useQuery<WeatherForecast[]>({
    queryKey: ['weather', zipcode],
    queryFn: () => fetchWeatherForecastByZipcode(zipcode),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
