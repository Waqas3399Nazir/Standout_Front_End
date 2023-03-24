import React from "react";
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

const Product = () => {
  return (
    <>
      <Header />
      <section className="h-fit">
        <div className="h-fit">
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
            <h1 className="text-white font-bold text-secondContainerHeading font-subHeading">
              Filter
            </h1>
            <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-subHeading mt-[0.625rem] mb-[3rem]">
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
              <Dropdown />
            </div>
            <div className="mt-[2rem] mb-[1.5rem]">
              <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-subHeading mt-[0.625rem]">
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
                <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-subHeading mt-[0.625rem] mb-[3rem]">
                  Showing <strong>8 Products from 40</strong>
                </p>
              </div>
              <div className="flex flex-row gap-x-4">
                <p className="text-[#ffffff80] font-semibold text-homeSubHeading font-subHeading mt-[0.625rem] mb-[3rem]">
                  Sort by
                </p>
                <Dropdown />
              </div>
            </div>
            <div>
              <Grid container spacing={4}>
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
              </Grid>
              <div className="text-white my-[5rem] text-center">
                <h1>Pagination left</h1>
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
