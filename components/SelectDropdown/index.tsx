import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  dropdownValues?: any;
  selValue?: any;
};

export default function Dropdown({ dropdownValues, selValue }: Props) {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    selValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} className="w-full m-0">
        <Select
          className="w-full bg-white"
          value={selectedValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {dropdownValues !== undefined
            ? dropdownValues.map((value: any) => {
                return (
                  <MenuItem
                    key={value}
                    value={
                      value === "year" ||
                      value === "model" ||
                      value === "make" ||
                      value === "trim" ||
                      value === "Choose Brand" ||
                      value === "Newest" ||
                      value === "Select"
                        ? ""
                        : value
                    }
                  >
                    {/* {value === "year" ? <em> */}
                    {value}
                    {/* </em> : value} */}
                  </MenuItem>
                );
              })
            : ""}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
