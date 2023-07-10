import React from "react";

// import components
import {
  CountryDropdown,
  PriceRangeDropDown,
  PropertyDropdown,
} from "../components";

// import icon
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:-top-4 lg:shadow-1 relative bg-white lg:bg-transparent lg:backdrop-blur rounded-lg items-center">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropDown />
      <button className="w-full bg-violet-700 hover:bg-violet-800 lg:max-w-[160px] py-3 px-4 rounded-lg justify-center items-center flex text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
