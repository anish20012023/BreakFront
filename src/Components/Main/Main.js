import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import DrawerComp from "../Drawer/Drawer";
import { useStyles } from "./main.styles";
import Dashboard from "../../Pages/Dashboard/Dashboard";

function Main() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <DrawerComp />
      <Container maxWidth="xl" disableGutters>
        <Box className={classes.mainBox}>
          <Dashboard />
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
