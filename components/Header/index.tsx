import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Dropdown from "../Dropdown";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { SS_TOKEN } from "@/utils/constants";

const Header = () => {
  const router = useRouter();

  const [showHideDropdown, setShowHideDropdwon] = useState(false);
  const [showHideBtns, setShowHideBtns] = useState(true);

  const showHideHandler = () => {
    setShowHideDropdwon(!showHideDropdown);
  };

  const naviagteToLoginPage = () => {
    router.push("/login");
  };

  const naviagteToSignUpPage = () => {
    router.push("/register");
  };

  useEffect(() => {
    if (localStorage.getItem(SS_TOKEN)) {
      setShowHideBtns(false);
    }
  }, []);

  return (
    <header className="h-[7.375rem] px-[8.38%] text-right align-middle bg-black">
      <nav className="w-[52%]  float-right text-white">
        <ul className="mx-[13.66%] mr-[0px] flex flex-row justify-between items-center h-[7.735rem] align-middle text-sm font-normal">
          <li className="">Store</li>
          <li className="">Brand</li>
          <li className="">
            <Link href="/request-code">Request Code</Link>
          </li>
          <li className="">
            <Link href="/contact">Cotact Us</Link>
          </li>
          <li className="">
            <SearchIcon />
          </li>
          <li className="inline align-middle">
            <ShoppingCartIcon />
          </li>
          <li className="inline align-middle" onClick={showHideHandler}>
            {!showHideBtns ? (
              <Image
                className="inline"
                src="/images/header-icon.svg"
                alt=""
                width={20}
                height={20}
              />
            ) : (
              ""
            )}
            {showHideDropdown ? (
              <Dropdown showHide={setShowHideDropdwon} />
            ) : (
              ""
            )}
          </li>
          <li className="inline align-middle">
            {showHideBtns ? (
              <button
                className="px-[1rem] py-[0.5rem] bg-[#F23939] rounded-md"
                onClick={naviagteToSignUpPage}
              >
                Sign Up
              </button>
            ) : (
              ""
            )}
          </li>
          <li className="inline">
            {showHideBtns ? (
              <button
                className="px-[1rem] py-[0.5rem] bg-[#F23939] rounded-md"
                onClick={naviagteToLoginPage}
              >
                Login
              </button>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
