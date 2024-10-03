import React from "react";
import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
const SearchBar= ( {setQuery,setUnits})=> {
  const [city, setCity] = useState("");
  const handleSearchClick = () =>{
    if(city!== "")setQuery({q:city})
  };
const handleLocationClick=()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition[(position) => {
      const {latitude,longitude} = position.coords
      setQuery({lat:latitude,lon:longitude})
      
  }]
}
};
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
        value= {city}
        onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className=" cursor-pointer  text-white transition ease-out hover:scale-125 "
        onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className=" cursor-pointer text-white transition ease-out hover:scale-125 "
        onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl text-white font-medium transition ease-out hover:scale-125" onClick={() => setUnits("metric")}>
          ℃
        </button>
        <p className="text-2xl text-white font-medium mx-1">|</p>
        <button className="text-2xl text-white font-medium transition ease-out hover:scale-125" onClick={() => setUnits("imperial")}>
        ℉
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
