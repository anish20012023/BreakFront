import { Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import { useStyles } from "./OtherDropdown.styles";

function OtherDropdown({menuData, title, logo}) {
  const [dropAnchor, setDropAnchor] = useState(null);
  const [subAnchor, setSubAnchor] = useState(null);
  // main menu open
  const handleOpen = (e) => {
    setDropAnchor(e.currentTarget);
  };
  // main menu close
  const handleClose = () => {
    setDropAnchor(null);
    setSubAnchor(null);
  };

  //sub menu open
  const handelSubOpen = (e) => {
    setSubAnchor(e.currentTarget);
  };

  const classes = useStyles();

  return (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<img src={logo} />}
        onClick={handleOpen}
        className={classes.DropBtn}
      >
        {title}
      </Button>

      {/*  */}
      <Menu open={Boolean(dropAnchor)} anchorEl={dropAnchor} onClose={handleClose} className={classes.MenuDrop}>
        <MenuItem onClick={handelSubOpen}  className={`subMenuItem ${classes.menuItem}`}>
          <ListItemIcon>
            <img src={menuData[0].img} />
          </ListItemIcon>
          <ListItemText>{menuData[0].title}</ListItemText>
          <ListItemIcon>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
        </MenuItem>

        <Divider />
        {menuData.slice(1).map((menu, index) => (
          <>
            <MenuItem  key={index} className={classes.menuItem} onClick={handleClose}>
              <ListItemIcon>
                <img src={menu.img} />
              </ListItemIcon>
              <ListItemText>{menu.title}</ListItemText>
            </MenuItem>
          </>
        ))}
      </Menu>

      {/* submenu  */}

      <Menu
        open={Boolean(subAnchor)}
        anchorEl={subAnchor}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        className={`subMenu ${classes.MenuDrop}`}
      >
        {menuData[0].subMenu.map((item, index) => (
          <MenuItem onClick={handleClose} key={index} className={classes.menuItem}
          >
            <ListItemIcon>
              <img src={item.img} />
            </ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default OtherDropdown;
