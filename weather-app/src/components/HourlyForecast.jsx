import React from "react";

const HourlyForecast= ({title,data = [] }) => {
  //verifying the data structure
console.log ("data:", data);

// Ensure data is an array and not undefined before using map
if (!Array.isArray(data) || data.length === 0) {
    return (
        <div>
          <div className="flex items-center justify-start mt-6 text-white">
            <p className="font-medium uppercase">{title}</p>
          </div>
          <hr className="my-1" />
          <p className="text-white">No hourly forecast data available</p>
        </div>
      );
    }
  
  return (
    <div>
      <div className="flex items-center justify-start mt-6 text-white">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
      {data.map((d, index) => {
                  // Debugging: Check each item in the `data` array
                  console.log(`Item at index ${index}:`, d);

                  // Fallbacks for missing properties
                  const temp = d.temp ? d.temp.toFixed() : "N/A"; // Check if temp exists
                  const title = d.title || "No Title"; // Default to "No Title" if missing
                  const icon = d.icon || "http://openweathermap.org/img/wn/${icon}@2x.png"; // Placeholder image if icon is missing
        
return (
        <div
          key={index}
          className="flex flex-col text-white items-center justify-center"
        >
          <p className="font-light text-sm">{title}</p>
          <img
            src={icon}
            alt="weather icon"
            className="w-12 my-1"
          />
          <p className="font-medium">{`${temp}°`}</p>
        </div>
        )
      })}

    </div>
    </div>
  );
}

export default HourlyForecast;
