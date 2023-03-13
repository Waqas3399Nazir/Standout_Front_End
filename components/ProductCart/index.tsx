import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RiDeleteBin5Line } from "react-icons/ri";

const ProductCart = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="bg-[#1F2B3E] mb-[1rem] py-[1.5rem] justify-between px-[1.5rem] rounded-[0.5rem] flex flex-row">
      <div className="flex flex-row items-center">
        <div>
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </div>
        <div className="w-[9.75rem] h-[10rem] p-[0.75rem]">
          <Image
            className="w-full h-full"
            src="/images/product-details-image.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="ml-[1rem]">
          <h1 className="font-Inter text-white">AFW 09 LIBERTY SS</h1>
          <h3 className="font-Poppins text-[#00000080]">
            No Brand, Color Family: Black
          </h3>
          <div className="flex flex-row w-fit items-center mt-[1rem] px-[0.5rem] border-2 border-white">
            <RemoveIcon className="text-[#ffffff80]  hover:text-[#F23939]" />
            <p className="text-white font-medium text-homeSubHeading mx-[1rem] my-[0.25rem]">
              1
            </p>
            <AddIcon className="text-[#ffffff80] hover:text-[#F23939]" />
          </div>
        </div>
      </div>
      <div className="self-end mr-[1rem] mb-[1rem]">
        <h3 className="font-Inter font-semibold text-white text-homeButtonText">
          $23.00
        </h3>
        <div className="flex flex-row text-[#ffffff80] items-center mt-[0.75rem]">
          <FavoriteBorderIcon />
          <RiDeleteBin5Line fontSize="1.25rem" />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
