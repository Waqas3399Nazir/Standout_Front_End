import React from "react";
import FormHeading from "../FormHeading";
import { TextField } from "@mui/material";

const ContactInformationForm = () => {
  return (
    <div className="bg-[#1F2B3E] rounded-lg sm:rounded-none p-[1.5rem] sm:p-[3rem] lg:p-[5rem]">
      <div>
        <FormHeading heading="Contact Information" />
        <div className="mt-[1.5rem] flex flex-col sm:flex-row gap-[1.5rem]">
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="First Name"
            name="firstName"
            //  onChange={handleChange}
          />
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="Last Name"
            name="lastName"
            //  onChange={handleChange}
          />
        </div>
        <div className="mt-[1.5rem] flex flex-col sm:flex-row gap-[1.5rem]">
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="E-mail"
            name="email"
            //  onChange={handleChange}
          />
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            //  onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-[1.5rem] sm:mt-[2.5rem]">
        <FormHeading heading="Truck Information" />
        <div className="mt-[1.5rem] flex flex-col sm:flex-row gap-[1.5rem]">
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="Year"
            name="year"
            //  onChange={handleChange}
          />
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="Make"
            name="make"
            //  onChange={handleChange}
          />
        </div>
        <div className="mt-[1.5rem] flex flex-col sm:flex-row gap-[1.5rem]">
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="Model"
            name="model"
            //  onChange={handleChange}
          />
          <TextField
            className="w-full bg-white text-[#6E7684] rounded"
            //id="outlined-email"
            type="text"
            placeholder="Trim"
            name="trim"
            //  onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-[1.5rem] sm:mt-[2.5rem]">
        <FormHeading heading="Message" />
        <div className="mt-[1rem]">
          <textarea
            className="p-[1.25rem] w-full rounded-md sm:rounded-none"
            name="message"
            placeholder="Please Leave us a detailed message here"
            rows={8}
            // cols="auto"
          ></textarea>
        </div>
      </div>
      <div className="text-center w-full">
        <button className="w-full sm:w-fit rounded-lg sm:rounded-none text-white text-base bg-[#F23939] mt-[1rem] sm:mt-[1.5rem] lg:mt-[2.5rem] py-[1.25rem] px-[10%]">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactInformationForm;
