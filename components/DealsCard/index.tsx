import React from "react";
import Image from "next/image";

const DealsCard = () => {
  return (
    <div className="relative rounded-[2rem] pl-[2rem] bg-[#ffffffb3] backdrop-opacity-80 h-[25rem]  max-w-dealsCardWidth min-w-dealsCardWidth  p-[3rem]">
      <Image
        className="w-full h-full opacity-60"
        src="/images/card-placeholder-image.png"
        alt=""
        width={100}
        height={100}
      />
      <h3 className="absolute top-[-20px] text-white mt-[3rem] font-extralight text-[14px] font-Inter">
        American Force
      </h3>
      <h1 className="absolute top-[20%] font-bold mt-[8rem] text-white text-footerItem font-Inter">
        AFW 09 LIBERTY SS
      </h1>
      <div className="bg-[#F23939] py-[10px] px-[1.75rem] rounded-[2rem] w-fit top-[68%] absolute">
        <p className="text-white">$34,500</p>
      </div>
      <div className="absolute top-[85%] w-full">
        <div className="flex flex-row font-Montserrat">
          <div className="flex flex-col w-[65%] text-white">
            <h3 className="font-normal text-sm ">Brand</h3>
            <h1 className="font-semibold text-homeSubHeading">
              American Force
            </h1>
          </div>
          <div className="flex flex-col text-white">
            <h3 className="font-normal text-sm ">Color</h3>
            <h1 className="font-semibold  text-homeSubHeading">Black</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCard;
