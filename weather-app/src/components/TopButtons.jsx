import React from "react";
//creates a reusable button for all cities
function TopButtons() {
  //create an array for the cities
  const cities = [
    {
      id: 1,
      name: "Tokyo",
    },
    {
      id: 2,
      name: "Nairobi",
    },
    {
      id: 3,
      name: "Kampala",
    },
    {
      id: 4,
      name: "Johannesburg",
    },
    {
      id: 5,
      name: "Accra",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium text-white hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
