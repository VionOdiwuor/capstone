import React from "react";

const HourlyForecast = ({ title, data = [] }) => {
  //verifying the data structure
  console.log("data:", data);

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
      <div className="flex items-center justify-start mt-6 ms-12 text-white">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex justify-end mt-4 ms-16 ">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 w-full max-w-screen-lg px-4 ms-16 space-x-2 ">
        {data.map((d, index) => {
          // Debugging: Check each item in the `data` array
          console.log(`Item at index ${index}:`, d);

          // Fallbacks for missing properties
          const temp = d.temp ? d.temp.toFixed() : "N/A"; // Check if temp exists
          const title = d.title || "No Title"; // Default to "No Title" if missing
          const icon =
            d.icon || "http://openweathermap.org/img/wn/${icon}@2x.png"; // Placeholder image if icon is missing

          return (
            <div
              key={index}
              className="flex flex-col text-white items-center justify-evenly p-2 sm:p-4 bg-opacity-10 bg-gray-900 rounded-lg"
            >
              <p className="font-light text-sm mb-2">{title}</p>
              <img src={icon} alt="weather icon" className="w-12 my-1" />
              <p className="font-medium text-lg mb-2">{`${temp}°`}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default HourlyForecast;
