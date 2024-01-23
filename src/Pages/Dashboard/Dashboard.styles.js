import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    height: "40px",
    paddingLeft: "15px",
    backgroundColor: theme.palette.PrimaryBgColor,
    display: "flex",
    alignItems: "center",
    color: "#fff",
    gap: "10px",
    "& img": {
      width: "28px",
    },
  },
  dashGrid: {
    marginTop: "0px",
    padding: "0 4px",
    "& .gridItem": {},
  },
}));
