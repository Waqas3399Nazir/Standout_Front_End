import React from "react";

const DealsCard = () => {
  return (
    <div className="rounded-[2rem] pl-[2rem] h-[25rem] max-w-dealsCardWidth min-w-dealsCardWidth bg-center bg-dealCardBackgroundImage bg-contain bg-no-repeat bg-green-600">
      <h3 className="text-white mt-[3rem] font-extralight text-[14px] font-Inter">
        American Force
      </h3>
      <h1 className="font-bold mt-[8rem] text-white text-footerItem font-Inter">
        AFW 09 LIBERTY SS
      </h1>
      <div className="bg-[#F23939] py-[10px] px-[1.75rem] rounded-[2rem] w-fit ml-[0%] mt-[0.75rem] absolute">
        <p className="text-white">$34,500</p>
      </div>
      <div className=" py-[2.5rem] px-[7%]">
        <div className="flex flex-row  mt-[1.5rem] font-Montserrat">
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
