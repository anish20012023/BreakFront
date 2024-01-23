import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  MenuDrop: {
    "& .MuiMenu-paper": {
      borderRadius: "0px !important",
      minWidth: "120px",
      boxShadow: "1px 1px 4px gray",
      padding: "0 8px",
    },
    "&.subMenu": {
      left: "10px",
      top: "-7px",
    },
  },
  DropBtn: {
    color: theme.palette.headerTxtColor,
    fontSize: "13px",
    textTransform: "capitalize",
    "&:hover": {
      background: "none",
    },

    "& .MuiButton-endIcon": {
      marginLeft: 0,
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
  },

  menuItem: {
    padding: "2px",
    gap: "10px",
    cursor:"pointer",

    "& .MuiListItemIcon-root": {
      minWidth: "max-content",
    },
    "& .MuiListItemText-root span": {
      textTransform: "capitalize",
      fontSize: "12px",
    },
    "& .MuiListItemText-root +  span": {
      display: "none",
    },

    "&.subMenuItem":{
        padding:"0",
        "& .MuiListItemIcon-root svg":{
            fontSize:"17px"
        }
    }
  },
}));
