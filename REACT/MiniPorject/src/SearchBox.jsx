import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";





export default function SearchBox() {
  let [city,setCity] = useState("");

  let API_URL = "https://api.openweathermap.org/data/2.5/weather"
  let API_KEY = "db5784df224561944d9baad2618d4461"

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let result = {
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.himidity,
      feelsLike:jsonResponse.main.feels_like,
      grndlvl:jsonResponse.main.grnd_level,
      weather:jsonResponse.weather[0].description,
      windspeed: jsonResponse.wind.speed,
      winddef: jsonResponse.wind.deg
    }
    console.log(result);
  }
  

   

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    getWeatherInfo();
    setCity("");
    
  }
  
  return(
    <div className="SearchBox">
      
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Standard" variant="standard" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="outlined" type='submit'>Search</Button>
      </form>
    </div>
  )
}