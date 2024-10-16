import React, { useEffect } from 'react'
import { useState } from 'react'
import TopButtons from './components/TopButtons'
import SearchBar from './components/SearchBar'
import TimeLocation from './components/TimeLocation'
import TemperatureDetails from './components/TemperatureDetails'
import HourlyForecast from './components/HourlyForecast'
import getFormattedWeatherData from './services/WeatherService'

function App() {
  const [query,setQuery]= useState ({q:"Nairobi"});
  const[units,setUnits]= useState ('metric');
  const [weather, setWeather]= useState(null);
  const [error, setError] = useState(null); // Track error state





  const getWeather = async ()=> {
    try {
      const data = await getFormattedWeatherData({ ...query, units });
      if (data) {
        setWeather(data);
        setError(null); // Clear error on successful fetch
      } else {
        setError("City not found. Please enter a valid city name."); // Set error message
      }
    } catch (err) {
      console.log("Failed to fetch:", err);
      setError("An error occurred while fetching the weather data.");
    }
  };
 
  useEffect (() => {
    getWeather()
  },[query, units]
);
 // Function to set background based on weather condition
 const formatBackground = () => {
  if (!weather) return '/assets/background.jpg';

  const weatherCondition = weather.details.toLowerCase();
 
  switch (weatherCondition) {
    case "clear":
    case "sunny":
      return `url('/images/sunny.jpg')`; // Sunny background image
    case "clouds":
    case "cloudy":
      return `url('/images/cloudy.jpg')`; // Cloudy background image
    case "rain":
    case "rainy":
      return `url('/images/rainy.jpg')`; // Rainy background image
    case "snow":
      return `url('/images/snowy.jpg')`; // Snowy background image
    default:
      return `url('/images/background.jpg')`; // Default image for unknown conditions
      
    }
};

  return (
    <div className="min-h-screen w-screen flex flex-col justify-between bg-cover bg-center transition-all duration-500"  
    style={{ backgroundImage: formatBackground() }}
    >
      <TopButtons setQuery={setQuery}/>
      <SearchBar setQuery={setQuery} setUnits={setUnits} error={error}/>

      {weather && (
        <>
    <TimeLocation weather ={weather}/>
    <TemperatureDetails weather ={weather} />
    <HourlyForecast title="3 hour step forecast" data = {weather.hourly}/>
    <HourlyForecast title="Daily forecast" data= {weather.daily} />
    </>

       )}
   
    </div>
  )
};

export default App
