import React from "react";
import Button from "@mui/material/Button";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import { RxDragHandleDots1 } from "react-icons/rx";
import CircleIcon from "@mui/icons-material/Circle";
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";

const FooterAbove = () => {
  return (
    <>
      <div className="bg-[#F23939] py-[5.375rem] px-[7.22%] rounded-[2.5rem]">
        <div className="flex flex-row gap-[7%]">
          <h1 className="text-white font-heading font-bold text-heading uppercase">
            Have any question <br /> about us?
          </h1>
          <div className="text-white absolute ml-[40%] font-[5rem] mt-[-2rem]">
            <RxDragHandleDots1 fontSize="10rem" />
          </div>
        </div>
        <div className="flex flex-row gap-[1.5rem]">
          <Button
            className="text-[#F23939] bg-white border-white rounded-[0.5rem] hover:text-white hover:bg-[#F23939] hover:border-white mt-[1.25rem]"
            variant="outlined"
            startIcon={<PhonePausedIcon />}
          >
            (610) 426-3025
          </Button>
          <Button
            className="text-[#F23939] bg-white border-white rounded-[0.5rem] hover:text-white hover:bg-[#F23939] hover:border-white mt-[1.25rem]"
            variant="outlined"
          >
            Contact Us
          </Button>
        </div>
        <div className="text-white text-[7rem] absolute ml-[44%] mt-[3.5rem]">
          <BsCircleFill />
        </div>
        <div className="absolute ml-[42%] mt-[-19rem]">
          <Image
            className=""
            src="/images/footer-above-tyre.png"
            alt=""
            width={533}
            height={576}
          />
        </div>
      </div>
    </>
  );
};

export default FooterAbove;
