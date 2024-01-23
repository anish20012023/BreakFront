import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Dashboard.styles";
import DashAccordion from "./DashAccordion";
import BarChart from "./charts/Barchart";

function Dashboard() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.head}>
        <img src="images/dashboardPage/dash-white.svg" />
        <Typography>My Dashboard</Typography>
      </Box>
      <Grid container className={classes.dashGrid} spacing={1}>
        <Grid item md={6} className="gridItem">
          <DashAccordion title={"Oppurtunities Lost By stage"}>
            <BarChart />
          </DashAccordion>
        </Grid>
        <Grid item md={6} className="gridItem">
          <DashAccordion title={"Oppurtunities Won By stage"}>
            <BarChart />
          </DashAccordion>
        </Grid>
        <Grid item md={6} className="gridItem">
          <DashAccordion title={"Current opportunities By stage"}>
            <BarChart />
          </DashAccordion>
        </Grid>
        <Grid item md={6} className="gridItem">
          <DashAccordion title={"Current opportunities By Probability"}>
            <BarChart />
          </DashAccordion>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
