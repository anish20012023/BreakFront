import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.headerTxtColor,
    backgroundColor: "#fff",
  },
  toolbar: {
    justifyContent: "space-between",
    minHeight:"60px",
  },
  iconLinks: {
    display: "flex",
    alignItems: "center",
    gap: "80px",

    "& .icon": {
      width: "140px",
      display: "flex",
      alignItems: "center",
      "& img": {
        width: "100%",
      },
    },
  },

  HeaderLink: {
    display: "flex",
    gap: "25px",
  },
}));
