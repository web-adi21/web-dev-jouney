import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";





export default function SearchBox({updateInfo}) {
  let [city,setCity] = useState("");

  let API_URL = "https://api.openweathermap.org/data/2.5/weather"
  let API_KEY = "db5784df224561944d9baad2618d4461"

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      grndlvl:jsonResponse.main.grnd_level,
      weather:jsonResponse.weather[0].description,
      windspeed: jsonResponse.wind.speed,
      winddeg: jsonResponse.wind.deg
    }
    console.log(result);
    return result;
  }
  

   

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = async(event) => {
    event.preventDefault();
    console.log(city);
    
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
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