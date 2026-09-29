import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css"

import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
   const INIT_URL = "https://images.unsplash.com/photo-1761465902754-e6241403c047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGluZGlhbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
   

   
  return(
    <div className='card-container'>
    <div className='InfoBox'>
      
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image = {INIT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>The weather feels like {info.feelsLike}&deg;C</p>
          <p>Ground Level = {info.grndlvl}</p>
          <p>The wind is blowing at {info.windspeed} at {info.winddeg}&deg;</p>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}