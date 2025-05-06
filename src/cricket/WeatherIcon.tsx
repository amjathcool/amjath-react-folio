import React, { useEffect, useState } from "react";
import {
  fetchWeatherForecastByZipcode,
  WeatherForecast,
} from "./services/weather-service";

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
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    async function loadForecast() {
      const forecasts = await fetchWeatherForecastByZipcode(zipcode);
      const match = findClosestForecast(forecasts, datetime);
      const condition = match?.weather?.[0]?.main;
      setIcon(getWeatherIcon(condition || ""));
    }

    loadForecast();
  }, [datetime, zipcode]);

  return <div>{icon ?? "Loading..."}</div>;
};

export default WeatherIcon;
