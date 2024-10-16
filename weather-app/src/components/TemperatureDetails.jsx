import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TemperatureDetails = ({
  weather: {
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
    timezone,
  },
}) => {
  // Debugging: Log the values to verify correctness
  console.log("Sunrise:", sunrise); // Unix timestamp in seconds
  console.log("Sunset:", sunset); // Unix timestamp in seconds

  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed() || 0}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} km/h`,
    },
  ];
  const HorizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise, // Convert Unix time to readable format
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset, // Convert Unix time to readable format
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed() || 0}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed() || 0}°`,
    },
  ];

  return (
    <div className="text-center">
      <div className="flex flex-col items-center py-6 ">
      <img src={icon} alt="weather icon" className="w-20 " />
        <p className="text-xl text-cyan-300">{details} </p>
        <p className="text-5xl mt-2  text-white">{`${temp.toFixed()}°`}</p>
      </div>
     
          <div className="flex flex-col items-start space-y-2 ms-16 mb-2 text-white">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              <span className="font-light">{title}</span>
              <span className="font-medium ml-1">{value} </span>
            </div>
          ))}
        </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-10 text-white text-sm py-3">
            {HorizontalDetails.slice(0, 4).map(({ id, Icon, title, value }) => (
              <div key={id} className="flex items-center">
                <Icon size={30} className="mr-1" />
                <div className="ml-1">
                <p className="font-light">{title}</p>
                <span className="font-medium">{value}</span>
              </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TemperatureDetails;
