import React from "react";
import { useWeatherForecast } from "./hooks/useWeatherForecast";
import { WeatherForecast } from "./services/weather-service";

interface WeatherIconProps {
  datetime: string; // ISO string, e.g. "2025-05-05T15:00:00"
  zipcode?: string;
}

const getWeatherIcon = (condition: string): string => {
  switch (condition) {
    case "Rain":
      return "🌧️";
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Snow":
      return "❄️";
    default:
      return "";
  }
};

const findClosestForecast = (
  forecastList: WeatherForecast[],
  targetTime: string
): WeatherForecast | undefined => {
  const target = new Date(targetTime).getTime();
  return forecastList.find((forecast) => {
    const forecastTime = new Date(forecast.dt_txt).getTime();
    return Math.abs(forecastTime - target) < 90 * 60 * 1000; // within 90 mins
  });
};

const WeatherIcon: React.FC<WeatherIconProps> = ({
  datetime,
  zipcode = "43035",
}) => {
  const { data: forecasts, isLoading, error } = useWeatherForecast(zipcode);
  if (isLoading) return <div>Loading...</div>;
  if (error || !forecasts) return <div>⚠️</div>;

  const match = findClosestForecast(forecasts, datetime);
  const condition = match?.weather?.[0]?.main;
  const icon = getWeatherIcon(condition || "");

  return <div>{icon}</div>;
};

export default WeatherIcon;
