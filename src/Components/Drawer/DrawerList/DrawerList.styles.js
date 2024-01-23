import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  list: {
    padding: "0",

    "& .listItem": {
        
      padding: "0",
      "& .MuiListItemButton-root": {
        padding: "0 2px",
        gap: "4px",
        "& .MuiListItemIcon-root": {
          minWidth: "auto",
        },
        "& .MuiListItemText-root span": {
          fontSize: "12px",
        },
      },
    },
  },
}));
