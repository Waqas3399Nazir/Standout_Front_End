import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Dropdown from "@/components/SelectDropdown";
import PriceRangeSlider from "@/components/Slider";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import EastIcon from "@mui/icons-material/East";
import ProductCard from "@/components/ProductCard";
import FooterAbove from "@/components/FooterAbove";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {
  errorCleanUp,
  getAllProducts,
} from "@/redux-dev/products/product.slice";
import {
  pageCount,
  productsCount,
  products,
  error,
  activityInProgress,
} from "@/redux-dev/products/product.selector";

import {
  getAllBrands,
  brandsErrorCleanUp,
} from "@/redux-dev/brands/brands.slice";
import { brandsCount, brands } from "@/redux-dev/brands/brands.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";
import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";

const Product = () => {
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  //const [brandId, setBrandId] = useState();
  const [priceRange, setPriceRange] = useState<number[]>([7000, 14000]);
  const [sortByValue, setSortByValue] = useState("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const numberOfPages = useSelector(pageCount);
  const numberOfProducts = useSelector(productsCount);
  const getProducts = useSelector(products);
  const errorMessage = useSelector(error);
  const loader = useSelector(activityInProgress);
  const totalBrands = useSelector(brands);
  const [pageValue, setPageValue] = useState({
    start: 1,
    middle: 2,
    end: 3,
  });

  const chooseBrand = totalBrands.map((brand: any) => {
    return brand.brandName;
  });

  const incremntPageHandler = () => {
    setPageValue({
      ...pageValue,
      start: pageValue.start + 1,
      middle: pageValue.middle + 1,
      end: pageValue.end + 1,
    });
  };

  const decrementPageHandler = () => {
    setPageValue({
      ...pageValue,
      start: pageValue.start - 1,
      middle: pageValue.middle - 1,
      end: pageValue.end - 1,
    });
  };

  const onPageClickHandler = (pageNumber: number) => {
    router.push({
      pathname: "/product",
      query: {
        page: pageNumber,
        minPrice: router.query.minPrice,
        maxPrice: router.query.maxPrice,
        name: router.query.name,
        brandId: router.query.brandId,
      },
    });
    // }
  };

  //get all filter products
  const filterProducts = () => {
    // this should be handled on backend
    const findBrand: any = totalBrands.find((filterBrand: any) => {
      return filterBrand.brandName === brand;
    });
    router.push({
      query: {
        page: 1,
        name: productName,
        brandId: findBrand?.id,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      },
    });
  };

  useEffect(() => {
    if (
      router.query.page ||
      router.query.minPrice ||
      router.query.maxPrice ||
      router.query.name ||
      router.query.brandId
    )
      dispatch(
        getAllProducts({
          page: router.query.page,
          minPrice: router.query.minPrice,
          maxPrice: router.query.maxPrice,
          name: router.query.name,
          brandId: router.query.brandId,
        })
      );
  }, [
    router.query.page,
    router.query.minPrice,
    router.query.maxPrice,
    router.query.name,
    router.query.brandId,
  ]);

  useEffect(() => {
    //get all brands
    dispatch(getAllBrands());
  }, []);

  const sortBy = ["Select", "Newest", "Oldest", "Out Dated"];
  return (
    <>
      <Header />
      <section className="h-fit hidden lg:block">
        <div className="h-fit bg-black">
          <Image
            className="mt-[-10rem]"
            src="/images/product-page-image.png"
            alt=""
            width={1920}
            height={491}
          />
        </div>
      </section>
      <section className="p-productPagePadding pt-[2rem] pb-[0rem] sm:pb-[5.56rem] sm:pt-[2rem] lg:pt-[5.56rem] bg-black">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-between">
          <div className="w-full sm:w-full lg:w-[23.70%]">
            <h1 className="text-white font-bold text-secondContainerHeading font-Inter">
              Filter
            </h1>
            <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0.625rem] mb-[1rem] sm:mb-[2rem] lg:mb-[3rem]">
              Search your item
            </p>
            <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[1rem] lg:flex-col lg:gap-[0rem]">
              <div className="w-full bg-white flex items-center rounded h-[3.5rem]">
                <InputBase
                  className="w-[80%]"
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Product Name"
                  onChange={(event) => setProductName(event.target.value)}
                />
              </div>
              <div className="w-full mt-[0rem] sm:mt-[0rem] lg:mt-[1.25rem] h-[2.75rem]">
                <Dropdown dropdownValues={chooseBrand} selValue={setBrand} />
              </div>
            </div>
            <div className="mt-[2rem] sm:mb-[2rem] lg:mb-[0rem] sm:mt-[2rem] lg:mt-[0rem] flex flex-row gap-[5%] lg:flex-col">
              <div className="mt-[0rem] w-[50%] lg:w-full mb-[0rem] lg:mt-[2rem] lg:mb-[1.5rem]">
                <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0rem] lg:mt-[0.625rem]">
                  Price range
                </p>
                <PriceRangeSlider
                  defaultPriceRange={priceRange}
                  selectPriceRange={setPriceRange}
                />
              </div>
              <Button
                className="hidden w-[50%]  sm:flex flex-row bg-[#F23939] text-white lg:w-full justify-between font-bold font-heading text-homeButtonText py-[1rem] px-[9.25%] rounded-[0.5rem]"
                variant="contained"
                endIcon={<EastIcon />}
                onClick={filterProducts}
              >
                Find Item
              </Button>
            </div>
            <Button
              className="flex flex-row sm:hidden lg:hidden bg-[#F23939] mb-[1rem] text-white w-full justify-between font-bold font-heading text-homeButtonText py-[1rem] px-[9.25%] rounded-[0.5rem]"
              variant="contained"
              endIcon={<EastIcon />}
              onClick={filterProducts}
            >
              Find Item
            </Button>
          </div>
          <div className="w-full sm:w-full lg:w-[65%]">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0.625rem] mb-[3rem]">
                  Showing <strong>20 Products from {numberOfProducts}</strong>
                </p>
              </div>
              <div className="hidden sm:flex sm:flex-row sm:gap-x-4">
                <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0.625rem] mb-[3rem]">
                  Sort by
                </p>
                <Dropdown dropdownValues={sortBy} selValue={setSortByValue} />
              </div>
            </div>
            <div>
              {loader ? (
                <CircularProgress style={{ color: "white" }} size="1.5rem" />
              ) : (
                <Grid container spacing={4}>
                  {getProducts.map((product: any) => {
                    return (
                      <Grid key={product.id} item xs={6} sm={6} md={6}>
                        <ProductCard product={product} />
                      </Grid>
                    );
                  })}
                </Grid>
              )}
              <div className="text-white flex flex-row gap-[1rem] my-[5rem] justify-center">
                <button
                  onClick={decrementPageHandler}
                  disabled={pageValue.start <= 1 ? true : false}
                  className="px-[1rem] min-w-[3rem] py-[0.5rem] border-[1px] rounded-md hover:bg-[#F23939] hover:border-[#F23939]"
                >
                  <KeyboardDoubleArrowLeftIcon />
                </button>
                <button
                  onClick={() => onPageClickHandler(pageValue.start)}
                  className="px-[1.5rem] min-w-[3rem] py-[0.5rem] border-[1px] rounded-md bg-white text-[#F23939] hover:bg-[#F23939] hover:text-white hover:border-[#F23939]"
                >
                  {pageValue.start}
                </button>
                <button
                  onClick={() => onPageClickHandler(pageValue.middle)}
                  className="px-[1.5rem] min-w-[3rem] py-[0.5rem] border-[1px] rounded-md bg-white text-[#F23939] hover:bg-[#F23939] hover:text-white hover:border-[#F23939]"
                >
                  {pageValue.middle}
                </button>
                <button
                  onClick={() => onPageClickHandler(pageValue.end)}
                  className="px-[1.5rem] min-w-[3rem] py-[0.5rem] border-[1px] rounded-md bg-white text-[#F23939] hover:bg-[#F23939] hover:text-white hover:border-[#F23939]"
                >
                  {pageValue.end}
                </button>
                <button
                  onClick={incremntPageHandler}
                  disabled={pageValue.end >= numberOfPages ? true : false}
                  className="px-[1rem] py-[0.5rem] border-[1px] rounded-md hover:bg-[#F23939] hover:border-[#F23939]"
                >
                  <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-productPagePadding pt-[0rem] pb-[0rem] sm:pt-[0rem] sm:pb-[5.56rem] lg:pt-[5.56rem] lg:pb-[5.56rem] bg-black">
        <FooterAbove />
      </section>
      <Footer />
    </>
  );
};

export default Product;
