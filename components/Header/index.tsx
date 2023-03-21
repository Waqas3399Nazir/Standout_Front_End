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
import MenuIcon from "@mui/icons-material/Menu";
import OutsideClickHandler from "react-outside-click-handler";
//testing end

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [showHideDropdown, setShowHideDropdwon] = useState(false);
  const [showHideBtns, setShowHideBtns] = useState(true);
  const productsInCart = useSelector(cartQty);

  //
  const [showHideMobileNavbar, setShowHideMobileNavbar] = useState(false);
  const mobileNavbarHandler = () => {
    setShowHideMobileNavbar(!showHideMobileNavbar);
  };
  //

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
    <>
      <header className="hidden sm:block h-[7.375rem] px-[8.38%] text-right align-middle bg-black">
        <nav className="sm:w-[100%] lg:w-[52%]  float-right text-white">
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
              <Link className="cursor-pointer" href="/request-quote">
                Request Quote
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
      <>
        <header className="block w-full bg-black sm:hidden">
          <MenuIcon
            className="text-white my-[1.5rem] ml-[1.5rem]"
            onClick={mobileNavbarHandler}
          />
          {showHideMobileNavbar ? (
            <OutsideClickHandler
              onOutsideClick={() => setShowHideMobileNavbar(false)}
            >
              <nav className="w-[60%] top-0 absolute z-50 pt-[3rem] text-white bg-black min-h-fit h-screen">
                <ul className="mr-[0px] flex flex-col uppercase gap-[1rem] font-heading text-lg font-normal">
                  <li className="inline pl-[10%] pr-[10%] align-middle">
                    {!showHideBtns ? (
                      <>
                        <Avatar
                          className="cursor-pointer m-auto w-[6.5rem] h-[6.5rem]"
                          alt="Travis Howard"
                          src="/images/header-icon.svg"
                        />
                        <h1 className="uppercase text-center mt-[0.75rem] font-heading font-bold">
                          Username
                        </h1>
                      </>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="inline pt-[0.75rem] pl-[10%] align-middle">
                    <Link className="flex flex-row gap-[5%]" href="/cart">
                      <Badge
                        badgeContent={productsInCart}
                        color="error"
                        className="cursor-pointer"
                      >
                        <ShoppingCartIcon />
                      </Badge>
                      <h1>Cart</h1>
                    </Link>
                  </li>
                  <li className="pl-[10%]">
                    <Link className="cursor-pointer" href="/product?page=1">
                      Store
                    </Link>
                  </li>
                  <li className="pl-[10%]">
                    <Link className="cursor-pointer" href="/">
                      Brand
                    </Link>
                  </li>
                  <li className="pl-[10%]">
                    <Link className="cursor-pointer" href="/request-quote">
                      Request Quote
                    </Link>
                  </li>
                  <li className="pl-[10%]">
                    <Link className="cursor-pointer" href="/contact">
                      Cotact Us
                    </Link>
                  </li>
                  {/* <li className="">
            <SearchIcon className="cursor-pointer" />
          </li> */}
                  <hr className="border-[1px] border-[#F23939]" />
                  <li className="pl-[10%]">
                    <Link className="cursor-pointer" href="/">
                      Profile Setting
                    </Link>
                  </li>
                  <li className="inline pl-[10%] align-middle">
                    {showHideBtns ? (
                      <button
                        className="px-[1rem] py-[0.5rem] w-[70%] sm:w-auto bg-[#F23939] cursor-pointer rounded-md"
                        onClick={naviagteToSignUpPage}
                      >
                        Sign Up
                      </button>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="inline pl-[10%]">
                    {showHideBtns ? (
                      <button
                        className="px-[1rem] py-[0.5rem] w-[70%] sm:w-auto bg-[#F23939] cursor-pointer rounded-md"
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
            </OutsideClickHandler>
          ) : (
            ""
          )}
        </header>
      </>
    </>
  );
};

export default Header;
