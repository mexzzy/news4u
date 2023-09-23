import React from "react";
import { CiCloudOn } from "react-icons/ci";
import { WeatherContainer } from "./Style";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

function Weather() {
  const [localTime, setLocalTime] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userLocalTime = new Date();
    setLocalTime(userLocalTime);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const API_KEY = process.env.REACT_APP_API_KEY_1;
        const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather`;

        axios
          .get(WEATHER_API_URL, {
            params: {
              lat: latitude,
              lon: longitude,
              appid: API_KEY,
              units: "metric",
            },
          })
          .then((response) => {
            setWeatherData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      });
    } else {
      setError("Geolocation is not available in this browser.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div>
        <ThreeCircles
          height="30"
          width="30"
          color="#04594d"
          radius="3"
          wrapperStyle={{padding : "10px"}}
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <WeatherContainer>
      <div> {localTime && <p>{localTime.toLocaleTimeString()}</p>}</div>
      <div>
        <CiCloudOn />
        <span>
          {weatherData && <span>{Math.round(weatherData.main.temp)}°C</span>}
        </span>
      </div>
    </WeatherContainer>
  );
}

export default Weather;
