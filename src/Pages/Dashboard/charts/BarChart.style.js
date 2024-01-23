import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    justifyContent: "center",
  },
  Header: {
    textAlign: "center",
    "& .MuiTypography-body1": {
      fontSize: "13px",
    },
    "& .MuiTypography-body2": {
      fontSize: "12px",
    },
  },
  barchart: {
    padding: " 0 5px",
  },
  BottomBox: {
    textAlign: "center",
    "& p": {
      fontSize: "14px",
    },

    "& .customLegend": {
      backgroundColor: theme.palette.secondaryHeader,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "max-content",
      margin: "0 auto",
      gap: "10px",
      padding: "1px 5px",
      "& .legend": {
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        "& .boxIcon": {
          height: "12px",
          width: "12px",
        },
      },
    },
  },
}));
