import "./weatherlist.scss";
import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../../Weather API/Weather";
import { WiDaySunny, WiCloud, WiRain } from "weather-icons-react";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

const WeatherList = ({ city }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(city);
      setWeatherData(data.list.slice(0, 7));
    };

    fetchData();
  }, [city]);

  const handleWeatherClick = (weather) => {
    setSelectedWeather(weather);
  };

  const renderWeatherIcon = (weather) => {
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clear")) {
      return <WiDaySunny size={30} />;
    } else if (main.includes("cloud")) {
      return <WiCloud size={30} />;
    } else if (main.includes("rain")) {
      return <WiRain size={30} />;
    }
  };

  return (
    <div className="wrapper__list">
      <WeatherDetail weather={selectedWeather} />
      <div className="horizontal-list">
        {weatherData.map((item) => (
          <div
            key={item.dt}
            onClick={() => handleWeatherClick(item)}
            className="horizontal-list-item"
          >
            <h3>{item.dt_txt}</h3>
            {renderWeatherIcon(item)}
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
