import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useStyles } from "./DrawerList.styles";

function DrawerList({data}) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {data.map((item, index) => (
        <ListItem key={index} className="listItem">
          <ListItemButton LinkComponent={Link}>
            <ListItemIcon>
              <img src={item.img} />
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default DrawerList;
