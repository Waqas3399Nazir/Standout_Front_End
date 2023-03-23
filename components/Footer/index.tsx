import React from "react";
import CustomizedProgressBars from "../LinearProgress";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-white py-[4rem] flex flex-col sm:text-white w-full sm:py-[5rem] lg:py-[7.5rem] bg-black px-[10%] sm:px-[10%] lg:px-[13.60%] sm:flex-row">
        <div className="w-[100%] sm:w-[50%] lg:w-[33.33%]">
          <div className="lg:w-fit m-auto">
            <ul className="sm:flex flex-col text-footerGrayItem sm:text-[1.25rem] lg:text-footerItem font-bold sm:font-bold content-between gap-y-2">
              <li className="text-[#F23939] ">
                <Link href="/"> Our Site</Link>
              </li>
              <li className="font-normal">
                <Link href="/product?page=1"> Store</Link>
              </li>
              <li className="font-normal">Brands</li>
              <li className="font-normal">
                <Link href="/request-quote">Request Quote</Link>
              </li>
              <li className=" font-normal">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="font-normal">FAQs</li>
              <li className="font-normal">Brand Ambassadors</li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] mt-[2rem] sm:mt-[0] sm:w-[50%] lg:w-[33.33%]">
          <div className="w-full sm:w-fit m-auto">
            <ul className="text-footerGrayItem sm:text-footerItem font-bold">
              <li className=" text-[#F23939] text-[1.35rem] lg:text-footerItem font-bold">
                Store Hours
              </li>
              <li className=" text-[#ffffffb3] text-[1rem] sm:text-[1.25rem] lg:text-footerGrayItem font-normal">
                MONDAY - FRIDAY <p className="text-white inline">9:30-6</p>
              </li>
              <li className=" text-[#ffffffb3] text-[1rem] sm:text-[1.25rem] lg:text-footerGrayItem font-normal">
                SATURDAY
                <p className="text-white inline"> 9:30-2</p>{" "}
              </li>
              <li className="w-[70%] my-[0.5rem]">
                <CustomizedProgressBars />
              </li>
              <li className="w-[70%] text-[#ffffffb3] text-[1rem] sm:text-[1.25rem] lg:text-footerGrayItem font-normal">
                1107 N Reading Rd Stevens, PA 17578
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] sm:hidden lg:block h-fit sm:w-[50%] lg:w-[33.33%]">
          <ul>
            <li className="text-[#F23939] text-xl font-bold mt-[1rem] mb-[2.25rem]">
              Subscribe for News and Upcoming <br />
              Events
            </li>
            <li>
              <input
                className="w-[75%] lg:w-[90%] text-black pl-[24px] py-[1rem]  mb-[2.25rem] border-[#F23939]"
                type="text"
                placeholder="Email"
              />
            </li>
            <li>
              <button className="bg-[#F23939] cursor-pointer w-[75%] text-center py-[1rem]">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] bg-black mt-[-3rem] pb-[3rem] hidden sm:block px-[10%] lg:hidden h-fit sm:w-[100%] lg:w-[33.33%]">
        <ul>
          <li className="text-[#F23939] text-xl font-bold mb-[2.25rem]">
            Subscribe for News and Upcoming <br />
            Events
          </li>
          <div className="flex flex-row gap-[2rem]">
            <li className="w-full">
              <input
                style={{ color: "#C7C7CD" }}
                className="w-full pl-[24px] py-[1rem]  mb-[2.25rem] border-[#F23939]"
                type="text"
                placeholder="Email"
              />
            </li>
            <li className="w-full">
              <button className="bg-[#F23939] cursor-pointer w-full py-[1rem]">
                Subscribe
              </button>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Footer;
