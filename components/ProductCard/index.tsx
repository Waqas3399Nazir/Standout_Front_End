import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="rounded-[3rem]">
      <div className="bg-[#C4C4C4] rounded-t-[0.5rem]">
        <Image
          className="w-[75%] h-[75%] m-auto"
          src="/images/card-placeholder-image.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="bg-[#F23939] py-[10px] px-[1.75rem] rounded-[2rem] w-fit ml-[17%] mt-[-1.55rem] absolute">
        <p className="text-white">$34,500</p>
      </div>
      <div className="bg-white py-[2.5rem] px-[7%] rounded-b-[0.5rem]">
        <h1 className="font-bold text-[#F23939] text-formHeading font-Inter">
          AFW 09 LIBERTY SS
        </h1>
        <h3 className="text-[#464646] text-homeSubHeading font-Inter">
          American Force
        </h3>
        <div className="flex flex-row  mt-[1.5rem] font-Montserrat">
          <div className="flex flex-col w-[65%]">
            <h3 className="font-normal text-sm text-black">Brand</h3>
            <h1 className="font-semibold text-black text-homeSubHeading">
              American Force
            </h1>
          </div>
          <div className="flex flex-col">
            <h3 className="font-normal text-sm text-black">Color</h3>
            <h1 className="font-semibold text-black text-homeSubHeading">
              Black
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
