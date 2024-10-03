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





  const getWeather = async ()=> {
    try{
      const data = await getFormattedWeatherData(query,units);
      setWeather(data);
      }catch(error){
        console.log("Failed to fetch", error);
    }
};
 
  useEffect (() => {
    getWeather()
  },[query, units]
);
const formatBackground =()=>{
  if(!weather) return ' from-cyan-600 to-blue-700 '
const threshold = units==='metric'? 20:60
if (weather.temp<= threshold) return ' from-cyan-600 to-blue-700 '
return 'from-yellow-600 to-orange-700'

}


  return (
    <div className={'mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground}'}>
      <TopButtons setQuery={setQuery}/>
      <SearchBar setQuery={setQuery} setUnits={setUnits}/>

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
