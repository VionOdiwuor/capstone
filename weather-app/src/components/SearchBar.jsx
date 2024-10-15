import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
const SearchBar = ({ setQuery, setUnits, error }) => {
  const [city, setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };
  return (
    <div className="flex flex-col items-center my-6 ">
      <div className="flex flex-row items-center justify-center w-full max-w-lg space-x-2">
      <div className="flex w-full items-center bg-white rounded-full shadow-xl mx-auto">
        
        {/* Search Icon inside the bar */}
        <BiSearch
          size={25}
          className="text-gray-500 ml-3 cursor-pointer hover:scale-110 transition-transform"
          onClick={handleSearchClick}
        />
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-lg font-light p-2 w-full bg-transparent focus:outline-none capitalize placeholder:lowercase rounded-full"
        />
        
        <MdLocationOn
          size={25}
          className="text-gray-500 mr-3 cursor-pointer hover:scale-110 transition-transform "
          onClick={handleLocationClick}
        />
      </div>
      
      
      <div className="flex items-center space-x-1">
        <button
          className="text-2xl text-white font-medium transition ease-out hover:scale-125 px-1 py-1"
          onClick={() => setUnits("metric")}
        >
          ℃
        </button>
        <p className="text-2xl text-white font-medium ">|</p>
        <button
          className="text-2xl text-white font-medium transition ease-out hover:scale-125 px-1 py-1"
          onClick={() => setUnits("imperial")}
        >
          ℉
        </button>
      </div>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;
