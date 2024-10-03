import React, { useEffect } from 'react'
import { useState } from 'react'
import TopButtons from './components/TopButtons'
import SearchBar from './components/SearchBar'
import TimeLocation from './components/TimeLocation'
import TemperatureDetails from './components/TemperatureDetails'
import HourlyForecast from './components/HourlyForecast'
import getFormattedWeatherData from './services/WeatherService'

function App() {
  const [query,setQuery]= useState ({q:"london"})
  const[units,setUnits]= useState ('metric')
const [weather, setWeather]= useState(null)





  const getWeather = async ()=> {
  await getFormattedWeatherData({q:'Nairobi'}).then (data => {
    setWeather(data)
  });
    console.log(data);
  };
  useEffect (() => {
    getWeather()
  },[query, units]
)
getWeather();

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 '>
      <TopButtons />
      <SearchBar />

      {
       weather && (
        <>
    <TimeLocation weather ={weather}/>
    <TemperatureDetails weather ={weather} />
    <HourlyForecast/>
    <HourlyForecast/>
    </>

       )};
   
    </div>
  )
}

export default App
