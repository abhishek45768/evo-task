import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather");
      console.log(response)
    } catch (err) {
     console.log(err)
    }
  };

  return (
    <div>
      <h2>Weather Viewer</h2>
    </div>
  );
};

export default Weather;
