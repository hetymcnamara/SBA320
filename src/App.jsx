import React, { useEffect, useState } from 'react'
import './index.css'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'
import Form from './components/form/Form'

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (searchTerm) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': c10ff84810msh8e135e5618b076bp188102jsnd4ce0c6560c4',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'Access-Control-Allow-Origin': '`https://astonishing-douhua-5f73d0.netlify.app/`',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setWeatherData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData('New York');
  }, []);


  return (

    <div className='app'>
      <Form onWeatherSearch={fetchData} /><br></br>
      {weatherData && (
        <WeatherDisplay
          location={weatherData.location}
          currentTemp={weatherData.current}
          condition={weatherData.current}
          image={weatherData.current}
        />
      )}

    </div>
  )
}
