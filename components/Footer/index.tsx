import React from "react";
import CustomizedProgressBars from "../LinearProgress";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white w-full py-[7.5rem] bg-black px-[13.60%] flex flex-row">
      <div className="w-[33.33%]">
        <div className="w-fit m-auto">
          <ul className="flex flex-col text-lg font-bold content-between gap-y-2">
            <li className="text-[#F23939] text-footerItem">Our Site</li>
            <li className="text-footerItem font-normal">Store</li>
            <li className="text-footerItem font-normal">Brands</li>
            <li className="text-footerItem font-normal">
              <Link href="/request-code">Request Quote</Link>
            </li>
            <li className="text-footerItem font-normal">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-footerItem font-normal">FAQs</li>
            <li className="text-footerItem font-normal">Brand Ambassadors</li>
          </ul>
        </div>
      </div>
      <div className="w-[33.33%]">
        <div className="w-fit m-auto">
          <ul className="text-lg font-bold">
            <li className=" text-[#F23939] text-footerItem font-bold">
              Store Hours
            </li>
            <li className=" text-[#ffffffb3] text-footerGrayItem font-normal">
              MONDAY - FRIDAY <p className="text-white inline">9:30-6</p>
            </li>
            <li className=" text-[#ffffffb3] text-footerGrayItem font-normal">
              SATURDAY
              <p className="text-white inline"> 9:30-2</p>{" "}
            </li>
            <li className="w-[70%] my-[0.5rem]">
              <CustomizedProgressBars />
            </li>
            <li className="w-[70%] text-[#ffffffb3] text-footerGrayItem font-normal">
              1107 N Reading Rd Stevens, PA 17578
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[33.34%]">
        <ul>
          <li className="text-[#F23939] text-xl font-bold mt-[1rem] mb-[2.25rem]">
            Subscribe for News and Upcoming <br />
            Events
          </li>
          <li>
            <input
              className="w-[90%] pl-[24px] py-[1rem]  mb-[2.25rem] border-[#F23939]"
              type="text"
              placeholder="Email"
            />
          </li>
          <li>
            <button className="bg-[#F23939] py-[1rem] pl-6 pr-[45%]">
              Subscribe
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
