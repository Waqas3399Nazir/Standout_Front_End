import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterAbove from "@/components/FooterAbove";
import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";
import TextRating from "@/components/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Dropdown from "@/components/SelectDropdown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DealsCard from "@/components/DealsCard";
import { useRouter } from "next/router";
import {
  errorCleanUp,
  getSingleProduct,
} from "@/redux-dev/products/product.slice";
import {
  product,
  activityInProgress,
  error,
} from "@/redux-dev/products/product.selector";
import {
  addProductToCart,
  productQtyInCart,
  getUserCartProducts,
} from "@/redux-dev/cart/cart.slice";
import {
  cartErrorCleanUp,
  cartMessageCleanUp,
} from "@/redux-dev/cart/cart.slice";
import { cartQty, message, cartError } from "@/redux-dev/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";
import { CircularProgress } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ProductDetails = () => {
  const router = useRouter();
  const [productQty, setProductQty] = useState(0);
  const [userDefinedError, setUserDefinedError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const productDetails = useSelector(product);
  const loader = useSelector(activityInProgress);
  const errorMessage = useSelector(error);
  const cartSuccessMessage = useSelector(message);
  const cartErrorMessage = useSelector(cartError);

  const incrementProductQty = () => {
    if (productQty < 10) {
      setProductQty(productQty + 1);
    }
  };

  const decrementProductQty = () => {
    if (productQty > 0) {
      setProductQty(productQty - 1);
    }
  };

  const [sliderItem, setSliderItem] = useState(0);
  const sliderItems = [
    {
      url: !loader && productDetails ? productDetails.photoUrl : "",
    },
    {
      url: !loader && productDetails ? productDetails.photoUrl : "",
    },
    {
      url: !loader && productDetails ? productDetails.photoUrl : "",
    },
    {
      url: !loader && productDetails ? productDetails.photoUrl : "",
    },
    {
      url: !loader && productDetails ? productDetails.photoUrl : "",
    },
  ];
  const sliderActiveItemStyle = "border-4 border-[#F23939]";
  const incrementSlider = () => {
    if (sliderItem < 4) {
      setSliderItem(sliderItem + 1);
    }
  };
  const decrementSlider = () => {
    if (sliderItem > 0) {
      setSliderItem(sliderItem - 1);
    }
  };

  const navigateToCartPage = () => {
    router.push("/cart");
  };

  const addToCartHandler = (productId: number) => {
    if (productQty > 0 && productQty < 11) {
      setUserDefinedError("");
      dispatch(cartErrorCleanUp());
      dispatch(cartMessageCleanUp());
      dispatch(addProductToCart({ productId, quantity: productQty }));
    } else {
      setUserDefinedError("Quantity must be greater than 0 and less then 10!");
    }
  };

  useEffect(() => {
    dispatch(errorCleanUp());
    dispatch(cartErrorCleanUp());
    dispatch(cartMessageCleanUp());
    if (router.query.productId) {
      dispatch(getSingleProduct(router.query.productId));
    }
  }, [router.query.productId]);

  useEffect(() => {
    dispatch(getUserCartProducts());
  }, [cartSuccessMessage]);

  useEffect(() => {
    dispatch(errorCleanUp());
    dispatch(cartErrorCleanUp());
    dispatch(cartMessageCleanUp());
  }, []);

  return (
    <>
      <Header />
      <section className="p-productPagePadding pt-[0rem] bg-black hidden sm:hidden lg:block">
        <BreadCrumb
          brandName={
            !loader && productDetails.brandProduct
              ? productDetails.brandProduct.brandName
              : ""
          }
          productName={
            !loader && productDetails.name ? productDetails.name : ""
          }
        />
      </section>
      <section className="px-[7%] sm:px-[5%] lg:p-productPagePadding lg:pt-[0rem] bg-black">
        <div className="flex flex-col sm:flex-row w-full items-center sm:items-start sm:gap-[6%] lg:gap-[8%]">
          <div className="w-[70%] sm:w-[45%] lg:w-[54%] mt-[1rem] sm:mt-[0rem]">
            <div className="bg-[#C4C4C4] relative rounded-2xl w-full">
              <NavigateBeforeIcon
                className="absolute text-[#F23939] cursor-pointer !text-[3rem] sm:!text-[4rem] lg:!text-[6rem] top-[40%] left-[-25%] sm:left-[-5%]  lg:left-[-4%] "
                onClick={decrementSlider}
              />
              {!loader && productDetails ? (
                <Image
                  className="m-auto px-[1rem] py-[1.5rem]"
                  src={sliderItems[sliderItem].url}
                  alt=""
                  width={510}
                  height={250}
                />
              ) : (
                <CircularProgress />
              )}
              <NavigateNextIcon
                className="absolute text-[#F23939] cursor-pointer !text-[3rem] sm:!text-[4rem] lg:!text-[6rem] top-[40%] right-[-25%] sm:right-[-5%]  lg:right-[-4%] "
                onClick={incrementSlider}
              />
            </div>
            <div className="hidden sm:flex sm:flex-col lg:flex-row mt-[2.5rem] gap-[1.5rem]">
              <div className="flex flex-row gap-[1.5rem]">
                <Image
                  className={`rounded-xl p-[0.25rem] bg-[#C4C4C4] ${
                    sliderItem === 0 ? sliderActiveItemStyle : ""
                  } `}
                  src={sliderItems[0].url}
                  alt=""
                  width={102}
                  height={110}
                />
                <Image
                  className={`rounded-xl p-[0.25rem] bg-[#C4C4C4] ${
                    sliderItem === 1 ? sliderActiveItemStyle : ""
                  } `}
                  src={sliderItems[1].url}
                  alt=""
                  width={102}
                  height={110}
                />
              </div>
              <div className="flex flex-row gap-[1.5rem]">
                <Image
                  className={`rounded-xl p-[0.25rem] bg-[#C4C4C4] ${
                    sliderItem === 2 ? sliderActiveItemStyle : ""
                  } `}
                  src={sliderItems[2].url}
                  alt=""
                  width={102}
                  height={110}
                />
                <Image
                  className={`rounded-xl p-[0.25rem] bg-[#C4C4C4] ${
                    sliderItem === 3 ? sliderActiveItemStyle : ""
                  } `}
                  src={sliderItems[3].url}
                  alt=""
                  width={102}
                  height={110}
                />
              </div>
              <div className="flex flex-row">
                <Image
                  className={`rounded-xl p-[0.25rem] bg-[#C4C4C4] ${
                    sliderItem === 4 ? sliderActiveItemStyle : ""
                  } `}
                  src={sliderItems[4].url}
                  alt=""
                  width={102}
                  height={110}
                />
              </div>
            </div>
          </div>
          <div className="font-Inter sm:text-left w-full mt-[1rem] sm:w-[54%] sm:mt-[0rem] lg:w-[45%]">
            <div className="flex flex-row sm:flex-col gap-[20%]">
              <h1 className="text-white font-bold font-Inter text-[1.25rem] sm:text-[1.5rem] lg:text-formHeading">
                {!loader && productDetails.name ? productDetails.name : ""}
              </h1>
              <h1 className="text-white font-bold font-Inter text-[1.25rem] sm:hidden">
                ${!loader && productDetails.price ? productDetails.price : ""}
              </h1>
            </div>
            <h3 className="text-[#ffffff80]">
              {!loader && productDetails.brandProduct
                ? productDetails.brandProduct.brandName
                : ""}
            </h3>
            <div className="mt-[0rem]">
              {/* <TextRating /> */}
              {/* <Stack spacing={1} className="text-white">
                <Rating
                  className="text-[#F23939]"
                  name="half-rating-read"
                  defaultValue={
                    !loader ? Number(productDetails.loadRating) / 100 : 5
                  }
                  precision={0.5}
                  readOnly
                />
              </Stack> */}
            </div>
            <p className="text-[#ffffff80] font-Montserrat mt-[0.40rem] sm:mt-[0.50rem] lg:mt-[0.90rem] w-full sm:w-[90%] lg:w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex flex-row mt-[1.5rem] gap-x-4">
              <p className="text-[#ffffff80] font-Poppins">Quantity</p>
              <div className="flex flex-row items-center px-[0.5rem] border-[1px] sm:border-2 border-white">
                <RemoveIcon
                  className="text-[#ffffff80]  hover:text-[#F23939]"
                  onClick={decrementProductQty}
                />
                <p className="text-white font-medium text-[0.85rem] sm:text-[1rem] lg:text-homeSubHeading mx-[0.5rem] my-[0.15rem] sm:mx-[1rem] sm:my-[0.25rem]">
                  {productQty}
                </p>
                <AddIcon
                  className="text-[#ffffff80] hover:text-[#F23939]"
                  onClick={incrementProductQty}
                />
              </div>
            </div>
            <div className="flex flex-row gap-[1.25rem]">
              <button
                className="text-[#F23939] px-[0.75rem] border-[1px] py-[0.5rem] hidden sm:block sm:text-[1.45rem] lg:text-secondContainerHeading font-Montserrat sm:w-[9rem] lg:w-fit font-semibold sm:py-[0.5rem] lg:py-[0.65rem] bg-white border-white rounded-[0.5rem] hover:text-white hover:bg-[#F23939] hover:border-[1px] hover:border-white mt-[1.25rem]"
                //variant="outlined"
              >
                ${!loader && productDetails.price ? productDetails.price : ""}
              </button>
              <button
                className="text-[#F23939] border-[1px] hidden sm:hidden items-center lg:flex lg:flex-row  px-[0.95rem] text-[1.15rem] gap-[0.25rem] bg-white w-[35%] py-[0.65rem] border-white rounded-[0.5rem] hover:text-white hover:bg-[#F23939] hover:border-white hover:border-[1px] mt-[1.25rem]"
                // variant="outlined"
                // startIcon={<PhonePausedIcon />}
              >
                <PhonePausedIcon />
                (610) 426-3025
              </button>
            </div>
            <div className="mt-[1.5rem] mb-[-1rem] w-fit">
              {cartErrorMessage.message ||
              cartSuccessMessage ||
              userDefinedError ? (
                <Stack
                  className={
                    cartErrorMessage.message
                      ? "mb-4 border-red-500"
                      : "mb-4 border-green-500"
                  }
                  sx={{ width: "100%" }}
                  spacing={2}
                  color="#FF445A"
                >
                  <Alert
                    variant="outlined"
                    severity={
                      cartErrorMessage.message || userDefinedError
                        ? "warning"
                        : "success"
                    }
                    color={
                      cartErrorMessage.message || userDefinedError
                        ? "error"
                        : "success"
                    }
                  >
                    <p
                      className={
                        cartErrorMessage.message || userDefinedError
                          ? "text-[#FF445A]"
                          : "text-green-300"
                      }
                    >
                      {cartErrorMessage.message || userDefinedError
                        ? cartErrorMessage.message
                          ? cartErrorMessage.message
                          : userDefinedError
                        : cartSuccessMessage}
                    </p>
                  </Alert>
                </Stack>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-row gap-[1.5rem] my-[1.5rem]">
              <button
                className="text-[#F23939] text-[0.85rem] sm:text-[1rem] uppercase border-[1px] py-[0.40rem] sm:py-[0.5rem] bg-white w-full lg:w-[40%] border-white rounded-[0.5rem] hover:text-white hover:bg-[#F23939] hover:border-white hover:border-[1px] mt-[1.25rem]"
                //variant="outlined"
                onClick={navigateToCartPage}
              >
                Buy Now
              </button>
              <button
                className="text-[#F23939] text-[0.85rem] sm:text-[1rem] uppercase border-[1px] py-[0.40rem] sm:py-[0.5rem] bg-white w-full lg:w-[40%] border-white rounded-[0.5rem] hover:text-white hover:bg-[#F23939] hover:border-white hover:border-[1px] mt-[1.25rem]"
                // variant="outlined"
                onClick={() => addToCartHandler(productDetails.id)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="p-productPagePadding  pt-[3rem] bg-black">
        <div className="flex flex-row justify-between">
          <div className="w-[60%]">
            <div className="flex flex-row text-white justify-between w-[80%]">
              <h1 className="font-bold font-Inter text-formHeading">
                Description
              </h1>
              <hr className="text-white border-l-4 h-[2rem]" />
              <h1 className="font-bold font-Inter text-formHeading">
                Discussion
              </h1>
              <hr className="text-white border-l-4 h-[2rem]" />
              <h1 className="font-bold font-Inter text-formHeading">Reviews</h1>
            </div>
            <div className="mt-[5rem]">
              <h3 className="text-white font-Inter text-homeSubHeading font-semibold">
                The standard Lorem Ipsum passage, AFW 09 LIBERTY SS{" "}
              </h3>
              <p className="text-white font-Inter text-homeSubHeading font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className="mt-[3rem]">
              <h3 className="text-white font-Inter text-homeSubHeading font-semibold">
                AFW 09 LIBERTY SS
              </h3>
              <p className="text-white font-Inter text-homeSubHeading font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className="bg-[#F23939] w-[30%] pt-[3rem] pb-[2.25rem] px-[3rem] h-fit rounded-[1.36rem]">
            <div className="flex flex-row items-end">
              <h1 className="text-white font-Montserrat font-bold text-[6rem]">
                4.5
              </h1>
              <p className="text-white text-footerItem mb-[1.5rem] font-light font-Montserrat">
                /
              </p>
              <h3 className="text-white text-footerItem mb-[1.5rem] font-light font-Montserrat">
                5.0
              </h3>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-white font-Montserrat font-bold text-formHeading">
                Rating
              </h2>
              <Stack spacing={1} className="text-white">
                <Rating
                  className="text-white"
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </div>
          </div>
        </div>
        <hr className="text-white h-[0.15rem] bg-white mt-[4rem]" />
      </section>
      <section className="p-productPagePadding  pt-[3rem] bg-black">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="text-white font-bold font-heading text-heading uppercase">
              Product Reviews
            </h1>
            <div className="w-[20%]">
              <Dropdown />
            </div>
          </div>
          <hr className="text-white h-[0.15rem] bg-white mt-[0.25rem]" />
        </div>
        <div>
          <h3 className="text-white font-normal font-Poppins text-homeButtonText mt-[1.5rem]">
            Waqas Nazir
          </h3>
          <div className="flex flex-row items-center gap-[1rem] mt-[1rem]">
            <Stack spacing={1} className="text-white">
              <Rating
                className="text-[#F23939]"
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </Stack>
            <p className="text-[#ffffff80] text-homeButtonText font-Poppins font-normal">
              12 March 2023
            </p>
          </div>
          <div>
            <p className="text-[#ffffff80] text-homeButtonText font-Poppins font-normal mt-[1rem] mb-[1rem]">
              This product is a very good quality full. I am really happy about
              this product
            </p>
            <Button
              className="text-[#F23939] bg-white border-white rounded-[0rem] hover:text-white hover:bg-[#F23939] hover:border-white mt-[1.25rem]"
              variant="outlined"
            >
              Full Review
            </Button>
          </div>
          <div className="flex flex-row text-white mt-[2rem] gap-[1rem]">
            <ThumbUpIcon />
            <p>0</p>
          </div>
        </div>
      </section> */}
      {/* <section className="p-productPagePadding  pt-[3rem] bg-black">
        <h1 className="text-white font-heading text-heading uppercase font-bold">
          Top Deals of the Month
        </h1>
        <p className="font-Montserrat text-homeButtonText text-white w-[40%] mt-[1.5rem] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="flex flex-row gap-[2rem] mt-[3rem]">
          <DealsCard />
          <DealsCard />
        </div>
      </section> */}
      <section className="p-productPagePadding hidden sm:block  sm:pt-[3rem] bg-black">
        <FooterAbove />
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
