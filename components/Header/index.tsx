import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Dropdown from "../Dropdown";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { SS_TOKEN } from "@/utils/constants";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
//testing start
import { getUserCartProducts } from "@/redux-dev/cart/cart.slice";
import { cartQty } from "@/redux-dev/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";
//testing end

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [showHideDropdown, setShowHideDropdwon] = useState(false);
  const [showHideBtns, setShowHideBtns] = useState(true);

  const productsInCart = useSelector(cartQty);

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

  useEffect(() => {
    dispatch(getUserCartProducts());
  }, []);

  return (
    <header className="h-[7.375rem] px-[8.38%] text-right align-middle bg-black">
      <nav className="w-[52%]  float-right text-white">
        <ul className="mx-[13.66%] mr-[0px] flex flex-row justify-between items-center h-[7.735rem] align-middle text-sm font-normal">
          <li className="">
            <Link className="cursor-pointer" href="/product?page=1">
              Store
            </Link>
          </li>
          <li className="">
            <Link className="cursor-pointer" href="/">
              Brand
            </Link>
          </li>
          <li className="">
            <Link className="cursor-pointer" href="/request-code">
              Request Code
            </Link>
          </li>
          <li className="">
            <Link className="cursor-pointer" href="/contact">
              Cotact Us
            </Link>
          </li>
          {/* <li className="">
            <SearchIcon className="cursor-pointer" />
          </li> */}
          <li className="inline align-middle">
            <Link href="/cart">
              <Badge
                badgeContent={productsInCart}
                color="error"
                className="cursor-pointer"
              >
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </li>
          <li className="inline align-middle" onClick={showHideHandler}>
            {!showHideBtns ? (
              <Avatar
                className="cursor-pointer w-[2rem] h-[2rem]"
                alt="Travis Howard"
                src="/images/header-icon.svg"
              />
            ) : (
              // <Image
              //   className="inline"
              //   src="/images/header-icon.svg"
              //   alt=""
              //   width={20}
              //   height={20}
              // />
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
                className="px-[1rem] py-[0.5rem] bg-[#F23939] cursor-pointer rounded-md"
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
                className="px-[1rem] py-[0.5rem] bg-[#F23939] cursor-pointer rounded-md"
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
