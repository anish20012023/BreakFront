import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
 
  accordion: {
    backgroundColor: "#EFEFEF",
    boxShadow: "none !important",

    "&.Mui-expanded": {
      borderRadius: "0 ",
    },

    "& .accordianSummary": {
      minHeight: "29px !important",
      maxHeight: "29px !important ",
      padding: "0 8px !important",
      backgroundColor: theme.palette.AccorColor,
      fontSize: "12px ",
      fontWeight: "500",
      textTransform: "capitalize",
      color: theme.palette.headerTxtColor,

      "& .MuiAccordionSummary-content": {
        margin: "0 ",
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
    padding: "0px !important",
    "& .selectBox": {
      height: "20px ",
      backgroundColor: theme.palette.secondaryHeader,
    },

    // date select

    "& .dateSelect": {
      marginLeft: "5px !important ",
      maxHeight: "100%",
      maxWidth: "45px !important",
      borderRadius: "0 !important",
      display: "flex !important",
      padding: "2px !important",
      outlineStyle: "none !important",

      "& .MuiSelect-select": {
        padding: "0 !important",
        fontSize: "12px ",
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
    padding: "2px 10px !important",
    fontSize: "12px !important",
  },

  chartBox: {
    // border: "1px solid green",
    // minHeight: "calc( 300px - 20px)",
  },
}));
