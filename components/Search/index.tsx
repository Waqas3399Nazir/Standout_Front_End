import React from "react";
import Dropdown from "../SelectDropdown";

const Search = () => {
  return (
    <div className="bg-[#1F2B3E] mx-[11.67%] px-[5.47%] py-[3.1rem]">
      <div className="flex flex-row gap-[4.76%]">
        <div className="w-full">
          <Dropdown />
        </div>
        <div className="w-full">
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-row gap-[4.76%]">
        <div className="w-full">
          <Dropdown />
        </div>
        <div className="w-full">
          <Dropdown />
        </div>
        <div className="w-full h-full text-homeButtonText">
          <button className="text-white text-[1.5rem] bg-[#F23939] w-full py-[1.25rem] mt-[0.5rem] uppercase rounded">
            Shop Wheels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
