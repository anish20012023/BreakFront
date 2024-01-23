import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  accordion: {
    backgroundColor: "#EFEFEF",
    boxShadow: "none",
    marginBottom: "5px",

    "&.Mui-expanded": {
      margin: "0",
      borderRadius: "0",
      marginBottom: "7px",
    },

    "& .accordianSummary": {
      minHeight: "29px",
      maxHeight: "29px ",
      padding: "0 8px",
      backgroundColor: theme.palette.AccorColor,
      fontSize: "12px",
      fontWeight: "500",
      textTransform: "capitalize",
      color: theme.palette.headerTxtColor,

      "& .MuiAccordionSummary-content": {
        margin: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "&.Mui-expanded": {
          "& button.expand": {
            transform: "rotate(180deg)",
            transition: "all .3s",
          },
        },
      },
    },
  },

  //   accordionDetails
  accordionDetails: {
    minHeight: "300px",
    backgroundColor: "#fff",
    padding: 0,
    "& .selectBox": {
      height: "20px",
      backgroundColor: theme.palette.secondaryHeader,
    },

    // date select

    "& .dateSelect": {
      marginLeft: "5px",
      maxHeight: "100%",
      maxWidth: "45px",
      borderRadius: "0",
      display: "flex !important",
      padding: "2px",
      outlineStyle: "none !important",

      "& .MuiSelect-select": {
        padding: "0",
        fontSize: "12px",
      },

      "& .MuiSelect-iconOutlined": {
        padding: "0",
        right: "0",
        fontSize: "17px",
      },

      "& fieldset": {
        display: "none",
      },
    },
  },
  dateMenuItem: {
    padding: "2px 10px",
    fontSize: "12px",
  },

  chartBox: {
    // border: "1px solid green",
    // minHeight: "calc( 300px - 20px)",
  },
}));
