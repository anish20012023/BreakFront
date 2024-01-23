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

  menuItem: {
    "&.MuiMenuItem-root": {
      padding: "2px",
      gap: "10px",

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
    },
  },
}));
