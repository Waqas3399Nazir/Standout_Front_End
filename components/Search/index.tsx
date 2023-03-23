import React, { useState, useEffect } from "react";
import Dropdown from "../SelectDropdown";
import { useRouter } from "next/router";

const Search = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  // const [selectedMake, setSelectedMake] = useState("");
  // const [selectTedrim, setSelectedTrim] = useState("");
  const [selectedMinPirce, setSelectedMinPirce] = useState("");
  const [selectedMaxPirce, setSelectedMaxPirce] = useState("");
  const router = useRouter();

  const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const model = ["branded", "non branded"];

  // const make = ["toyoata", "civic", "testing"];
  // const trim = ["triim", "tmri", "testig"];
  const minPrice = [1000, 2000, 3000, 4000, 5000];
  const maxPrice = [8000, 9000, 10000, 11000, 12000];

  const searchProducts = () => {
    // dispatch(getAllProducts({ yearIntroduced: selectedYear, model }));
    router.push(
      `/product?year=${selectedYear}&model=${selectedModel}&minPrice=${selectedMinPirce}&maxPrice=${selectedMaxPirce}`
    );
  };

  return (
    <div className="rounded-3xl sm:rounded-none bg-[#1F2B3E] mx-[8%] sm:mx-[8%] lg:mx-[11.67%] px-[5.47%] py-[3.1rem]">
      <div className="flex flex-row gap-[4.76%]">
        <div className="w-full">
          <Dropdown
            dropdownValues={year}
            selValue={setSelectedYear}
            placeholder={"Year"}
          />
        </div>
        <div className="w-full">
          <Dropdown
            dropdownValues={model}
            selValue={setSelectedModel}
            placeholder={"Model"}
          />
        </div>
      </div>
      <div className="flex flex-row gap-[4.76%] mt-[1.25rem]">
        <div className="w-full rounded">
          <Dropdown
            dropdownValues={minPrice}
            selValue={setSelectedMinPirce}
            placeholder={"Min Price"}
          />
        </div>
        <div className="w-full">
          <Dropdown
            dropdownValues={maxPrice}
            selValue={setSelectedMaxPirce}
            placeholder={"Max Price"}
          />
        </div>
        <div className="hidden lg:block w-full h-full text-homeButtonText">
          <button
            className="text-white text-[1.5rem] bg-[#F23939] w-full py-[1.25rem] mt-[0.5rem] uppercase rounded"
            onClick={searchProducts}
          >
            Shop Wheels
          </button>
        </div>
      </div>
      <div className="block text-[1.5rem] w-full lg:hidden">
        <button
          className="text-white text-[1.5rem] bg-[#F23939] w-full py-[1.25rem] mt-[1rem] uppercase rounded"
          onClick={searchProducts}
        >
          Shop Wheels
        </button>
      </div>
    </div>
  );
};

export default Search;
