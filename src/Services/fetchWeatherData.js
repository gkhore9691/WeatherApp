import axios from 'axios';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { error: true, message: "Cannot fetch weather data." };
  }
};