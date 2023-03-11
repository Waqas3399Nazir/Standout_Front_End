import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const ContactDetails = () => {
  return (
    <div className="bg-[#1F2B3E] py-[2.625rem] px-[4%] flex flex-row gap-[11.95%]">
      <div className="flex-5 flex flex-col">
        <div className="bg-[#D9D9D9] w-[221px] h-[101px]"></div>
        <div className="mt-[2rem]">
          <p className="text-xl text-white font-subHeading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys
          </p>
        </div>
      </div>
      <div className="flex-5">
        <h1 className="text-white font-heading text-formHeading mb-[1.75rem]">
          Contact Details:
        </h1>
        <div className="flex flex-row gap-[1rem] font-subHeading text-white text-lg font-normal mb-[1rem]">
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <p>
              1107 N Reading Rd <br /> Stevens, PA 17578
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] font-subHeading text-white text-lg font-normal mb-[1rem]">
          <div>
            <EmailIcon />
          </div>
          <div>
            <p>aaron@standoutspecialties.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] font-subHeading text-white text-lg font-normal mb-[1rem]">
          <div>
            <PhoneEnabledIcon />
          </div>
          <div>
            <p>(610) 426-3025</p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] font-subHeading text-white text-lg font-normal mb-[1rem]">
          <div>
            <EmailIcon />
          </div>
          <div>
            <p>@standoutspecialties</p>
          </div>
        </div>
        <div className="bg-white rounded">
          <InputBase
            className="w-[80%]"
            //  className={classes.location_item}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            //   className={classes.location_icon}
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
