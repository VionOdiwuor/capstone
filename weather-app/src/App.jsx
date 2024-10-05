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
// Function to set background based on temperature
const formatBackground = () => {
  if(!weather) return ' from-cyan-600 to-blue-700 '
const threshold = units==='metric'? 20:60
return weather.temp <= threshold ? 'from-cyan-600 to-blue-700' : 'from-yellow-600 to-orange-700';

};


  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground}`}>
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
