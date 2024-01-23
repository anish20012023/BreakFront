import React from "react";
import { useStyles } from "./Header.styles";
import { AppBar, Box, Toolbar } from "@mui/material";
import logo from "../../assests/logo.svg";
import DashDropdown from "./DashboardDropdown/DashDropdown";
import OtherDropdown from "./OtherDropdown/OtherDropdown";
import { business, orderingData, salesData } from "./OtherDropdown/Data";
import Profile from "./ProfileDopdrown/Profile";


function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.iconLinks}>
            <Box className="icon">
              <img src={logo} alt="" />
            </Box>
            <Box className={classes.HeaderLink}>
              <DashDropdown />
              <OtherDropdown
                menuData={salesData}
                title="sales pipeline"
                logo={"images/Header/salespipeline/sales.svg"}
              />

              <OtherDropdown
                title="ordering"
                menuData={orderingData}
                logo={"images/Header/ordering/Ordering_overview.svg"}
              />
              <OtherDropdown
                title="business directory"
                menuData={business}
                logo={"images/Header/business/entire_directory.svg"}
              />
            </Box>
          </Box>
          <Box className="profile">
            <Profile/>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
