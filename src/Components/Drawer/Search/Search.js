import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

import check from "../../../assests/DrawerIcon/checkbox-checked.png";
import uncheck from "../../../assests/DrawerIcon/checkbox-unchecked.png";
// custom textfield for search
const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  margin: "4px 0",
  "& .MuiOutlinedInput-root": {
    height: "27px",
    width: "100% !important",
    backgroundColor: "#fff",
    "& input": {
      padding: "0 5px",
      fontSize: "14px",
    },
  },
}));

// custom formControl for checkBox

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  gap: "5px",
  margin: 0,
  "& .MuiCheckbox-root": {
    borderRadius: "0",
    padding: "0",
    "& .MuiTouchRipple-root": {
      display: "none",
    },
    "& svg": {
      fontSize: "22px",
    },
  },

  "& .MuiFormControlLabel-label": {
    fontSize: "13px",
  },
}));

function Search() {
  return (
    <Box>
      <CustomTextField placeholder="Search for ..." />
      <CustomFormControlLabel
        label="Include Inactive"
        control={<Checkbox icon={<img src={uncheck} />} checkedIcon={<img src={check} />} />}
      />
    </Box>
  );
}

export default Search;
