import React from "react";

const HourlyForecast= ({title,data}) => {
console.log ("data:", data)
  return (
    <div>
      <div className="flex items-center justify-start mt-6 text-white">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
      {data.map((d, index) => (
        <div
          key={index}
          className="flex flex-col text-white items-center justify-center"
        >
          <p className="font-light text-sm">{d.title}</p>
          <img
            src={d.icon}
            alt="weather icon"
            className="w-12 my-1"
          />
          <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default HourlyForecast;
