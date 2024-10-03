import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TemperatureDetails = () => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: "22°",
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "30%",
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: "10km/h",
    },
  ];
  const HorizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "6:30 AM",
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: "7:10 PM",
    },
    {
      id: 3,
      Icon:MdKeyboardArrowUp,
      title: "High",
      value: "28°",
    },
    {
        id: 4,
        Icon:MdKeyboardArrowDown,
        title: "Low",
        value: "18°",
      },
  ];
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
        <p className="text-5xl">34°</p>
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
