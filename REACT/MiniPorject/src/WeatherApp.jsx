import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo , setWeatherInfo] = useState({
      city:"Delhi",
      temp: 25,
      humidity: 50,
      feelsLike:28,
      grndlvl:500,
      weather:"barren",
      windspeed:2.63,
  })
  return(
    <div style={{textAlign: "center"}}>
      Weather App
      <SearchBox />
      <InfoBox/>
    </div>
  )
}