import React from "react";
import { DateTime } from "luxon";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// Define the formattedTime function using Luxon
const formattedTime = (secs, timezone) => {
  // Ensure secs is a valid number before formatting
  if (!secs || isNaN(secs)) return "Invalid time"; // Fallback value if secs is invalid
  return DateTime.fromSeconds(secs).setZone(timezone).toFormat("hh:mm a");
};
const TemperatureDetails = ({weather:{
  details,
  icon,
  temp,
  temp_min,
  temp_max,
  sunrise,
  sunset,
  speed,
  humidity,
  feels_like,
  timezone
},
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed() || 0 }°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value:  `${humidity}`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value:  `${speed.toFixed() || 0 }`,
    },
  ];
  const HorizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value:formattedTime(sunrise,timezone), // Convert Unix time to readable format
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value:formattedTime(sunset,timezone), // Convert Unix time to readable format
    },
    {
      id: 3,
      Icon:MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed() || 0}°`,
    },
    {
        id: 4,
        Icon:MdKeyboardArrowDown,
        title: "Low",
        value: `${temp_min.toFixed() || 0}°`,
      },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p> 
          {details} </p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={icon}
          alt="weather icon"
          className="w-20"
        />
        <p className="text-5xl">{`${temp.toFixed()}`}</p>
        <div className="flex flex-col space-y-3 items-start">

          {
          verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex font-light text-sm items-center justify-center">
              <Icon size={18} className="mr-1" />
              {`${title}`}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))
          }
        </div>
      </div>
      <div>
<div className="flex flex-row items-center justify-center space-x-10 text-white text-sm py-3">
{
          HorizontalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex flex-row items-center">
<Icon size={30}/>
<p className="font-light ml-1">
{`${title}`}   
<span className="font-medium ml-1">{value}</span>
</p>
            </div>
          ))
          }

<div className="flex flex-row items-center"></div>
</div>


      </div>
    </div>
  );
}

export default TemperatureDetails;
