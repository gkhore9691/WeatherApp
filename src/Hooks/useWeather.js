// src/hooks/useWeather.js
import { useState, useEffect } from "react";
import { fetchWeatherData } from "../Services/fetchWeatherData";

const useWeather = (data) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  let city = {
    lat: data?.latitude,
    lon: data?.longitude,
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city).then(setWeather).catch(setError);
    }
  }, [data]);

  return { weather, error };
};

export default useWeather;
