// src/components/WeatherDisplay.js
import React from "react";
import { useAppContext } from "../Context/AppContext";
import NoData from "./NoData";

function WeatherDisplay({ weather }) {
  const { location } = useAppContext();
  if (!weather || weather.error) return <NoData />;

  const { latitude, longitude, timezone, elevation, current_weather } = weather;
  const { temperature, windspeed, winddirection, is_day, time } =
    current_weather;
  const formattedTime = new Date(time).toLocaleString("en-GB", {
    timeZone: timezone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-b from-blue-500 to-blue-800 text-white p-5">
      <div className="max-w-md w-full bg-white bg-opacity-10 rounded-lg shadow-lg text-center p-8 space-y-4">
        <h2 className="text-2xl font-bold">Current Weather</h2>
        <p className="text-md text-gray-100">
        {location?.name}, {location?.admin1}, {location?.country}
        </p>
        <p className="text-sm text-gray-300">
          Coordinates: {latitude.toFixed(2)}, {longitude.toFixed(2)}
        </p>
        <p className="text-lg font-semibold">
          {formattedTime} ({timezone})
        </p>
        <p className="text-5xl font-bold mt-4">
          {temperature}°C
          <span className="text-xl font-medium text-gray-300">
            {" "}
            {is_day ? "(Day)" : "(Night)"}
          </span>
        </p>
        <div className="flex justify-around mt-5 text-sm">
          <div>
            <p className="text-gray-300">Windspeed</p>
            <p className="font-semibold">{windspeed} km/h</p>
          </div>
          <div>
            <p className="text-gray-300">Wind Direction</p>
            <p className="font-semibold">{winddirection}°</p>
          </div>
          <div>
            <p className="text-gray-300">Elevation</p>
            <p className="font-semibold">{elevation} m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
