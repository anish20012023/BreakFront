import React, { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, MenuItem, Select } from "@mui/material";
import { useStyles } from "./DashAccordion.styles";

// styled custom button for accordion summary
const CustomButtons = styled("span")({
  display: "flex",
  alignItems: "center",
  gap: "1px",
  "& button": {
    padding: "0",
    border: "none",
    "& svg": {
      color: "black",
    },

    "&:hover": {
      background: "none",
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
  },
  "& .expand": {
    "& svg": {},
  },

  "& .setting": {
    "& svg": {
      fontSize: "14px",
    },
  },
  "& .close": {
    "& svg": {
      fontSize: "15px",
    },
  },
});

// DashAccordion component
function DashAccordion({ title, children }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  const [date, setDate] = useState("");
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <Accordion expanded={expanded} className={classes.accordion}>
      <AccordionSummary className="accordianSummary" sx={{ justifyContent: "center !important" }}>
        <span> {title}</span>
        <CustomButtons>
          <IconButton className="expand" onClick={() => setExpanded(!expanded)}>
            <ArrowDropDownOutlinedIcon />
          </IconButton>
          <IconButton className="setting">
            <SettingsRoundedIcon />
          </IconButton>
          <IconButton className="close">
            <CloseRoundedIcon />
          </IconButton>
        </CustomButtons>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <Box className="selectBox">
          <Select
            displayEmpty
            value={date}
            renderValue={(value) => "Date"}
            className="dateSelect"
            onChange={handleDateChange}
          >
            <MenuItem className={classes.dateMenuItem} value="last 30 days">
              Last 30 days
            </MenuItem>
            <MenuItem className={classes.dateMenuItem} value="month">
              this month
            </MenuItem>
            <MenuItem className={classes.dateMenuItem} value="quater">
              this quater
            </MenuItem>
            <MenuItem className={classes.dateMenuItem} value="year">
              this year
            </MenuItem>
          </Select>

          {/* chart */}
        </Box>
        <Box className={classes.chartBox}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default DashAccordion;
