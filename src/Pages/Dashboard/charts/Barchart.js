import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./BarChart.style";
// config
const config = {
  type: "bar",
  data: {
    labels: ["Meet", "Measure", "Match", "Makedeal"],
    datasets: [
      {
        data: [15, 12, 6, 6],
        backgroundColor: "#f69697",
      },
      {
        data: [160, 144, 20, 20],
        backgroundColor: "#89CFF0",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      y: {
        beginAtZero: true,
        max: 180,
        ticks: {
          stepSize: 36,
        },
        grid: {
          drawTicks: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    },
    indexAxis: "x",
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [
    {
      beforeDraw: function (chart) {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;
        ctx.fillStyle = "#E5E4E2";
        ctx.fillRect(left, top, width, height);
      },
    },
  ],
};

// barchart
const BarChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(chartRef.current, config);

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* header */}
      <Box className={classes.Header}>
        <Typography>My Opportunities Lost By Stage - ALL Locations</Typography>
        <Typography variant="body2">(Last 30 Days By Stage)</Typography>
      </Box>
      {/* chart */}
      <Box className={classes.barchart}>
        <canvas ref={chartRef} />
      </Box>
      {/* bottom */}
      <Box className={classes.BottomBox}>
        <Typography>Stages</Typography>
        <Box component={"span"} className="customLegend">
          <span className="legend">
            <span className="boxIcon" style={{ backgroundColor: "#f69697" }}></span>
            <span># of Opps</span>
          </span>
          <span className="legend">
            <span className="boxIcon" style={{ backgroundColor: "#89CFF0" }}></span>
            <span>Dollar amount of Opps (Thousands)</span>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default BarChart;
