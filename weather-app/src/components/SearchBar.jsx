import React from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
function SearchBar() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className=" cursor-pointer  text-white transition ease-out hover:scale-125 "
        />
        <BiCurrentLocation
          size={30}
          className=" cursor-pointer text-white transition ease-out hover:scale-125 "
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl text-white font-medium transition ease-out hover:scale-125">
          ℃
        </button>
        <p className="text-2xl  text-white font-medium mx-1">|</p>
        <button className="text-2xl text-white font-medium transition ease-out hover:scale-125">
        ℉
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
