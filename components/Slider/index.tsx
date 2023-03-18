import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// function valuetext(value: number) {
//   return;
// }

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
    <Box sx={{ width: 300 }}>
      <Slider
        className="text-[#F23939]"
        value={defaultPriceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={20000}
      />
    </Box>
  );
}
