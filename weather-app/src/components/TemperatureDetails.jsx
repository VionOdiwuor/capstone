import React from 'react'
import {FaThermometerEmpty} from "react-icons/fa"
import {BiSolidDropletHalf} from "react-icons/bi"
import {FiWind} from "react-icons/fi"
import {GiSunrise, GiSunset} from "react-icons/gi"
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/fa"

function TemperatureDetails() {
  return (
    <div>
     <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p> Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather icon"
          className="w-20"
        /> 
        <p className="text-5xl">34° </p>
        <div className="flex flex-col space-y-3 items-start">
        <div className="flex font-light text-sm items-center justify-center">
            <FaThermometerEmpty size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>
        </div>





    </div>
    </div>

  )
}

export default TemperatureDetails
