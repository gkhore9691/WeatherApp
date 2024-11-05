import "./App.css";
import Searchbar from "./Components/Searchbar";
import { useAppContext } from "./Context/AppContext";
import useWeather from "./Hooks/useWeather";
import { useEffect } from "react";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {
  const {location} = useAppContext();
  let weatherData = useWeather(location);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
      <div className="bg-black h-screen w-screen flex flex-col">
        <Searchbar />
        <div className="w-full h-full text-white">
          <WeatherDisplay weather={weatherData?.weather} />
        </div>
      </div>
  );
}

export default App;
