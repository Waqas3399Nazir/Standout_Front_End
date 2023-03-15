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
//testing start
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
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";
import { CircularProgress } from "@material-ui/core";
//testing end

const Product = () => {
  const [brand, setBrand] = useState("");
  const [sortByValue, setSortByValue] = useState("");

  const [pageValue, setPageValue] = useState({
    start: 1,
    middle: 2,
    end: 3,
  });

  const incremntPageHandler = () => {
    setPageValue({
      ...pageValue,
      start: pageValue.start + 1,
      middle: pageValue.middle + 1,
      end: pageValue.end + 1,
    });
    // const value = pageValue.start;
    dispatch(getAllProducts(pageValue.start));
  };

  const decrementPageHandler = () => {
    setPageValue({
      ...pageValue,
      start: pageValue.start - 1,
      middle: pageValue.middle - 1,
      end: pageValue.end - 1,
    });
    dispatch(getAllProducts(pageValue.start));
  };

  const onPageClickHandler = (pageNumber: number) => {
    console.log(pageNumber);
    dispatch(getAllProducts(pageNumber));
  };

  // const currentPage =

  const chooseBrand = [
    "Choose Brand",
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
  ];

  //testing start
  const dispatch = useDispatch<AppDispatch>();
  const numberOfPages = useSelector(pageCount);
  const numberOfProducts = useSelector(productsCount);
  const getProducts = useSelector(products);
  const errorMessage = useSelector(error);
  const loader = useSelector(activityInProgress);

  useEffect(() => {
    dispatch(getAllProducts(""));
  }, []);

  //testing end

  const sortBy = ["Select", "Newest", "Oldest", "Out Dated"];
  return (
    <>
      <Header />
      <section className="h-fit">
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
      <section className="p-productPagePadding bg-black">
        <div className="flex flex-row justify-between">
          <div className="w-[23.70%]">
            <h1 className="text-white font-bold text-secondContainerHeading font-Inter">
              Filter
            </h1>
            <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0.625rem] mb-[3rem]">
              Search your item
            </p>
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
            <div className="mt-[1.25rem] h-[2.75rem]">
              <Dropdown dropdownValues={chooseBrand} selValue={setBrand} />
            </div>
            <div className="mt-[2rem] mb-[1.5rem]">
              <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0.625rem]">
                Price range
              </p>
              <PriceRangeSlider />
            </div>
            <Button
              className="bg-[#F23939] text-white w-full justify-between font-bold font-heading text-homeButtonText py-[1rem] px-[9.25%] rounded-[0.5rem]"
              variant="contained"
              endIcon={<EastIcon />}
            >
              Find Item
            </Button>
          </div>
          <div className="w-[65%]">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-Inter mt-[0.625rem] mb-[3rem]">
                  Showing <strong>20 Products from {numberOfProducts}</strong>
                </p>
              </div>
              <div className="flex flex-row gap-x-4">
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
                      <Grid key={product.id} item xs={6} md={6}>
                        <ProductCard product={product} />
                      </Grid>
                    );
                  })}
                </Grid>
              )}
              {/* <Grid container spacing={4}>
                <Grid item xs={6} md={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={6} md={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={6} md={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={6} md={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={6} md={6}>
                  <ProductCard />
                </Grid>
                <Grid item xs={6} md={6}>
                  <ProductCard />
                </Grid>
              </Grid> */}
              <div className="text-white flex flex-row gap-[1rem] my-[5rem] justify-center">
                {/* <h1>Pagination left</h1> */}
                {/* <Pagination
                  className="text-[#F23939] bg-white w-fit m-auto"
                  count={3}
                  variant="outlined"
                  shape="rounded"
                /> */}
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
      <section className="p-productPagePadding bg-black">
        <FooterAbove />
      </section>
      <Footer />
    </>
  );
};

export default Product;
