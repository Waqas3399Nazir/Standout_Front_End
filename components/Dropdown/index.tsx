import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { SS_TOKEN } from "@/utils/constants";
import Link from "next/link";

type Props = {
  showHide: any;
};

const Dropdown = ({ showHide }: Props) => {
  const logoutHandler = () => {
    localStorage.removeItem(SS_TOKEN);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => showHide(false)}>
      <div className="bg-white text-black rounded absolute mt-[0.5rem] py-[0.75rem] ml-[-5.7rem]">
        <ul className="text-left">
          <li className="px-[0.75rem] cursor-pointer py-[3px] text-sm font-bold mb-[3px] hover:bg-[#F23939] hover:text-white">
            Username
          </li>
          <hr className="bg-black h-[0.15rem]" />
          <li className="px-[0.75rem] cursor-pointer py-[3px] mt-[3px] hover:bg-[#F23939] hover:text-white">
            Profile Setting
          </li>
          <li
            className="px-[0.75rem] cursor-pointer py-[3px] hover:bg-[#F23939] hover:text-white"
            onClick={logoutHandler}
          >
            <Link href="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
