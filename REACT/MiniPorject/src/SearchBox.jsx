import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";





export default function SearchBox() {
  let [city,setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  }
  
  return(
    <div className="SearchBox">
      <h3>Search For The City</h3>
      <form>
        <TextField id="standard-basic" label="Standard" variant="standard" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="outlined" type='submit' >Search</Button>
      </form>
    </div>
  )
}