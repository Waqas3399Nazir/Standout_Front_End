import React from "react";
import FormHeading from "../FormHeading";
import { TextField } from "@mui/material";

const FeedBackForm = () => {
  return (
    <div className="p-[1rem] sm:p-[2rem] bg-white rounded-md shadow-md">
      {/* <FormHeading heading="Send us a Message" /> */}
      <div className="mt-[1.5rem] flex flex-col sm:flex-row gap-[1.5rem]">
        <TextField
          className="w-full  text-[#6E7684] bg-[#EBEBEB] rounded"
          //id="outlined-email"
          type="text"
          placeholder="First Name"
          name="firstName"
          //  onChange={handleChange}
        />
        <TextField
          className="w-full bg-[#EBEBEB] text-[#6E7684] rounded"
          //id="outlined-email"
          type="text"
          placeholder="Last Name"
          name="lastName"
          //  onChange={handleChange}
        />
      </div>
      <div className="mt-[1.5rem] flex flex-col sm:flex-row gap-[1.5rem]">
        <TextField
          className="w-full bg-[#EBEBEB] text-[#6E7684] rounded"
          //id="outlined-email"
          type="text"
          placeholder="E-mail"
          name="email"
          //  onChange={handleChange}
        />
        <TextField
          className="w-full bg-[#EBEBEB] text-[#6E7684] rounded"
          //id="outlined-email"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          //  onChange={handleChange}
        />
      </div>
      <div className="mt-[2.5rem]">
        <div className="mt-[1rem]">
          <textarea
            className="p-[1.25rem] w-full rounded bg-[#EBEBEB]"
            name="message"
            placeholder="Please Leave us a detailed message here"
            rows={8}
            // cols="auto"
          ></textarea>
        </div>
      </div>
      <div className="text-center w-full">
        <button className="text-white text-base bg-[#F23939] mt-[2.5rem] py-[1.25rem] px-[10%]">
          SEND
        </button>
      </div>
    </div>
  );
};

export default FeedBackForm;
