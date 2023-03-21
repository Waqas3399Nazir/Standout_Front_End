import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedBackForm from "@/components/FeedbackForm";
import ContactDetails from "@/components/ContactDetails";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="bg-black px-[1rem] py-[0.5rem]">
        <div className=" text-white">
          <h1 className="text-[2rem] sm:text-heading font-black w-fit m-auto font-heading uppercase">
            Contact
          </h1>
        </div>
      </section>
      {/* <section className="bg-black p-sectionPadding">
        <ContactDetails />
      </section> */}
      <section className="bg-white px-[10%] pt-[3rem]">
        <div className="flex flex-col sm:flex-col lg:flex-row gap-[3%]">
          <div className="w-full lg:w-[50%]">
            <div className="bg-[#F23939] p-[2rem] w-fit rounded-xl">
              <HeadsetMicIcon className="text-white text-[3rem]" />
            </div>
            <h1 className="text-heading font-heading font-bold uppercase mt-[3rem]">
              Let’s Talk
            </h1>
            <p className="font-Inter font-normal text-homeSubHeading mt-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
            <div className="flex flex-col sm:flex-row mt-[2.5rem] justify-between items-center">
              <div className="bg-[#FFEBEB] w-[70%] sm:w-fit flex flex-row items-center p-[0.5rem] rounded-md">
                <div className="bg-[#F23939] p-[0.5rem] ml-[-1.5rem] rounded-full">
                  <LocalPhoneIcon />
                </div>
                <p className="ml-[0.25rem] text-[#595959]">
                  1107 N Reading Rd Stevens,
                  <br /> PA 17578
                </p>
              </div>
              <div className="bg-[#FFEBEB] w-[70%] sm:w-fit mt-[1rem] sm:mt-[0rem] flex flex-row items-center px-[0.5rem] py-[0.65rem] rounded-md">
                <div className="bg-[#F23939] p-[0.5rem] ml-[-1.5rem] rounded-full">
                  <ApartmentIcon />
                </div>
                <p className="ml-[0.25rem] text-[#595959]">(610) 426-3025</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-[2rem] lg:mt-[0rem] lg:w-[50%]">
            <FeedBackForm />
          </div>
        </div>
      </section>
      <section>
        <div className="p-[6rem] bg-black mt-[-9rem]"></div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
