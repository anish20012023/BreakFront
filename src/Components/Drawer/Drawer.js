import {
  Box,
  Toolbar,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import { useStyles } from "./Drawer.styles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Search from "./Search/Search";
import DrawerList from "./DrawerList/DrawerList";
import { recentItem, shortCut } from "./DrawerList/ListData";

function DrawerComp() {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} variant="permanent">
      <Box className="head">
        <KeyboardDoubleArrowLeftIcon />
      </Box>
      {/* accordion search */}
      <Accordion className={classes.accordion} defaultExpanded>
        <AccordionSummary className="accordianSummary" expandIcon={<ArrowDropDownIcon />}>
          search
        </AccordionSummary>
        <AccordionDetails className="accordionDeatils">
          <Search />
        </AccordionDetails>
      </Accordion>

      {/* accordion myshortcut */}
      <Accordion className={classes.accordion} defaultExpanded>
        <AccordionSummary className="accordianSummary" expandIcon={<ArrowDropDownIcon />}>
          My Shortcuts
        </AccordionSummary>
        <AccordionDetails className="accordionDeatils">
          <DrawerList data={shortCut} />
        </AccordionDetails>
      </Accordion>
      {/* recent items */}
      <Accordion className={classes.accordion}>
        <AccordionSummary className="accordianSummary" expandIcon={<ArrowDropDownIcon />}>
          My Recent Items
        </AccordionSummary>
        <AccordionDetails className="accordionDeatils">
          <DrawerList data={recentItem} />
        </AccordionDetails>
      </Accordion>
    </Drawer>
  );
}

export default DrawerComp;
