import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CreateIcon from "@mui/icons-material/Create";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Button from "@mui/material/Button";
import Image from "next/image";

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="p-checkoutSectionPadding bg-black">
        <div className="flex flex-row w-full justify-between">
          <div className="w-[65%] text-white">
            <div>
              <h1 className="font-heading font-bold text-heading uppercase mb-[2rem]">
                Shopping
              </h1>
              <div className="border-white border-2 px-[5%] py-[1.5rem] font-Inter font-normal text-homeButtonText text-white">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-[1rem]">
                    <LocationOnIcon className="text-[#F23939]" />
                    <input
                      className="bg-black w-fit"
                      type="text"
                      value="Waqas Nazir"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <CreateIcon className="text-[#F23939]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#ffffffb3] ml-[1rem] mt-[1rem]">
                    Beaconhouse National University Lahore Punjab Pakistan{" "}
                  </p>
                </div>
              </div>
              <div className="py-[0.82rem] border-x-2"></div>
              <div className="border-white flex flex-row justify-between border-2 px-[5%] py-[1.5rem] font-Inter font-normal text-homeButtonText text-white">
                <div className="flex flex-row items-center gap-[1rem]">
                  <TextSnippetIcon className="text-[#F23939]" />
                  <input
                    className="bg-black  w-fit"
                    type="text"
                    value="Bill to the same address"
                    placeholder=""
                  />
                </div>
                <div>
                  <CreateIcon className="text-[#F23939]" />
                </div>
              </div>
              <div className="py-[0.82rem] border-x-2"></div>
              <div className="border-white flex flex-row justify-between border-2 px-[5%] py-[1.5rem] font-Inter font-normal text-homeButtonText text-white">
                <div className="flex flex-row items-center gap-[1rem]">
                  <PhoneEnabledIcon className="text-[#F23939]" />
                  <input
                    className="bg-black  w-fit"
                    type="text"
                    value="0340-92501454"
                    placeholder=""
                  />
                </div>
                <div>
                  <CreateIcon className="text-[#F23939]" />
                </div>
              </div>
              <div className="py-[0.82rem] border-x-2"></div>
              <div className="border-white flex flex-row justify-between border-2 px-[5%] py-[1.5rem] font-Inter font-normal text-homeButtonText text-white">
                <div className="flex flex-row items-center gap-[1rem]">
                  <EmailIcon className="text-[#F23939]" />
                  <input
                    className="bg-black"
                    type="text"
                    value="waqas3399nazir@gmail.com"
                    placeholder=""
                  />
                </div>
                <div>
                  <CreateIcon className="text-[#F23939]" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-heading font-bold text-heading uppercase my-[2rem]">
                Order Summary
              </h1>

              <div className="border-white border-2 px-[5%] py-[1.5rem] font-Inter font-medium text-homeButtonText text-[#ffffff80]">
                <div className="flex flex-row justify-between">
                  <h1 className="">Subtotal (1 item)</h1>
                  <h1>$2300</h1>
                </div>
                <div className="flex flex-row justify-between my-[1.5rem]">
                  <h1 className="">Shipping Fee</h1>
                  <h1>$0</h1>
                </div>
                <div className="flex flex-row justify-between">
                  <h1 className="">Total</h1>
                  <h1>$2300</h1>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                className="text-white py-[1rem] bg-[#F23939] hover:bg-[#F23939] w-[40%] border-[#F23939] hover:border-[#F23939] rounded-[0.25rem] mt-[1.25rem]"
                variant="outlined"
              >
                Proceed to Pay
              </Button>
            </div>
          </div>
          {/* <div>
            <hr className="text-white border-l-4 h-fit" />
          </div> */}
          <div className="w-[30%]">
            <div className="px-[1rem] py-[1.5rem] h-[15rem]">
              <Image
                className="w-full h-full"
                src="/images/product-details-image.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="font-Poppins px-[1rem] mt-[2rem] text-white font-medium">
              <h1 className="text-homeSubHeading">AFW 09 LIBERTY SS</h1>
              <h3 className="text-homeButtonText text-[#ffffffb3] py-[0.75rem]">
                American Force
              </h3>
              <h3 className="text-homeSubHeading">$2300</h3>
              <h1 className="min-w-fit font-bold font-heading text-footerItem uppercase my-[3rem]">
                Delivery option
              </h1>
            </div>
            <div className="border-[1px] text-white font-Poppins border-white px-[1rem] py-[1.5rem]">
              <h3 className="text-[1rem] font-semibold">$2300</h3>
              <h3 className="text-[14px] font-normal my-[1rem]">
                Home Delivery
              </h3>
              <h3 className="text-[14px] font-normal">East Arrival</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
