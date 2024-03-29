import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    "& .MuiDrawer-paper": {
      marginTop: "60px",
      borderRight: "none",
      width: "210px",
      height: "calc(100vh - 60px)",
      padding: "0 3px",

      "&::-webkit-scrollbar": {
        width: "2px",
      },
      "&::-webkit-scrollbar-thumb": {
        width: "2px",
        backgroundColor: theme.palette.PrimaryBgColor,
      },
    },
    "& .head": {
      backgroundColor: theme.palette.PrimaryBgColor,
      minHeight: "40px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "10px",
      marginBottom: "5px",
    },
  },

  accordion: {
    backgroundColor: "#EFEFEF !important",
    boxShadow: "none !important",
    marginBottom: "5px !important",

    "&.Mui-expanded": {
      margin: "0 !important",
      borderRadius: "0 !important",
      marginBottom: "7px !important",
    },

    "& .accordianSummary": {
      minHeight: "29px !important",
      maxHeight: "29px !important",
      padding: "0 8px",
      backgroundColor: theme.palette.AccorColor,
      fontSize: "13px ",
      fontWeight: "500 ",
      textTransform: "capitalize",
      color: theme.palette.headerTxtColor,

      "& .MuiAccordionSummary-expandIconWrapper": {
        "& svg": {
          color: "#000",
          fontSize: "25px",
        },
      },
    },

    "& .accordionDeatils": {
      padding: "3px",
    },
  },
}));
