import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

type Props = {
  defaultPriceRange?: any;
  selectPriceRange?: any;
};

export default function PriceRangeSlider({
  defaultPriceRange,
  selectPriceRange,
}: Props) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    selectPriceRange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 100 }} className="text-[#F23939] w-full">
      <Slider
        className="!text-[#F23939] !bg-[#F23939] !py-[1px] sm:!py-[0rem] w-full sm:w-[80%] lg:w-[95%]"
        value={defaultPriceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
      />
    </Box>
  );
}
