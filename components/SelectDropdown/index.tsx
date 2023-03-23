import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  dropdownValues?: any;
  selValue?: any;
  placeholder?: string;
};

export default function Dropdown({
  dropdownValues,
  selValue,
  placeholder,
}: Props) {
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
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <p style={{ color: "#C7C7CD", fontSize: "14px" }}>
                  {placeholder}
                </p>
              );
            }
            return selected;
          }}
          displayEmpty
        >
          {dropdownValues !== undefined
            ? dropdownValues.map((value: any) => {
                return (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                );
              })
            : ""}
        </Select>
      </FormControl>
    </div>
  );
}
