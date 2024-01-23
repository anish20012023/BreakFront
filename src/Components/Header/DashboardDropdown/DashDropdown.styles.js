import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  MenuDrop: {
    "& .MuiMenu-paper": {
      borderRadius: "0px !important",
      minWidth: "120px",
      boxShadow: "1px 1px 4px gray",
      padding: "0 8px",
    },
  },
  DropBtn: {
    "&.MuiButton-root": {
      color: theme.palette.headerTxtColor.main,
      fontSize: "13px",
      textTransform: "capitalize  !important",
      "&:hover": {
        background: "none !important",
      },

      "& .MuiButton-endIcon": {
        marginLeft: "0px ",
      },
      "& .MuiTouchRipple-root": {
        display: "none",
      },
    },
  },
  menuItem: {
    "&.MuiMenuItem-root": {
      padding: "2px !important",
      gap: "10px  !important",

      "& .MuiListItemIcon-root": {
        minWidth: "max-content  !important",
      },
      "& .MuiListItemText-root span": {
        textTransform: "capitalize",
        fontSize: "12px",
      },
      "& .MuiListItemText-root +  span": {
        display: "none",
      },
    },
  },
}));
