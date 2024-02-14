import React from 'react';
import './weatherDisplay.css';

export default function WeatherDisplay({ location, currentTemp, condition, image }) {
  const loaded = () => {
    return (
      <>
        <img src={image.condition.icon} alt="weather icon" width="40%"/>
        <h1>{currentTemp.temp_f} °F</h1><br></br>
        <p 
        style={{
          
        }}
        >{location.name}</p>  
      </>
    )
  }

  const loading = () => {
    return <h1>Location doesn't exist</h1>
  }

  return location && currentTemp ? loaded() : loading();
}
