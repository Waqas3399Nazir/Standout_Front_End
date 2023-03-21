import React, { useState } from "react";
import Dropdown from "../SelectDropdown";

const Search = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectTedrim, setSelectedTrim] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const year = [
    "year",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  const make = ["make", "toyoata", "civic", "testing"];
  const model = ["model", "abc", "def", "ghi", "jkl"];
  const trim = ["trim", "triim", "tmri", "testig"];

  return (
    <div className="rounded-3xl sm:rounded-none bg-[#1F2B3E] mx-[8%] sm:mx-[8%] lg:mx-[11.67%] px-[5.47%] py-[3.1rem]">
      <div className="flex flex-row gap-[4.76%]">
        <div className="w-full">
          <Dropdown dropdownValues={year} selValue={setSelectedYear} />
        </div>
        <div className="w-full">
          <Dropdown dropdownValues={make} selValue={setSelectedMake} />
        </div>
      </div>
      <div className="flex flex-row gap-[4.76%] mt-[1.25rem]">
        <div className="w-full rounded">
          <Dropdown dropdownValues={model} selValue={setSelectedModel} />
        </div>
        <div className="w-full">
          <Dropdown dropdownValues={trim} selValue={setSelectedTrim} />
        </div>
        <div className="hidden lg:block w-full h-full text-homeButtonText">
          <button className="text-white text-[1.5rem] bg-[#F23939] w-full py-[1.25rem] mt-[0.5rem] uppercase rounded">
            Shop Wheels
          </button>
        </div>
      </div>
      <div className="block text-[1.5rem] w-full lg:hidden">
        <button className="text-white text-[1.5rem] bg-[#F23939] w-full py-[1.25rem] mt-[1rem] uppercase rounded">
          Shop Wheels
        </button>
      </div>
    </div>
  );
};

export default Search;
