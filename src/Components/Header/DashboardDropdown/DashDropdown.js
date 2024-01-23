import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles } from "./DashDropdown.styles";

const menuItem = [
  { img: "images/Header/dashboard/Dashboard.svg", title: "my dashboard" },
  { img: "images/Header/dashboard/Dashboard.svg", title: "management dashboard" },
  { img: "images/Header/dashboard/task.svg", title: "my tasks" },
  { img: "images/Header/dashboard/calendar.svg", title: "my calendars" },
  { img: "images/Header/dashboard/time.svg", title: "Time Tracking" },
];
function DashDropdown({ title }) {
  const [dropAnchor, setDropAnchor] = useState(null);
  const handleOpen = (e) => {
    setDropAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setDropAnchor(null);
  };
  const classes = useStyles();
  return (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<img src="images/Header/dashboard/Dashboard.svg" />}
        onClick={handleOpen}
        className={classes.DropBtn}
      >
        dashboard
      </Button>
      {/* dropdown */}
      <Menu open={Boolean(dropAnchor)} anchorEl={dropAnchor} onClose={handleClose} className={classes.MenuDrop}>
        {menuItem.map((menu, index) => (
          <Box>
            <MenuItem key={index} className={classes.menuItem} onClick={() => setDropAnchor(null)}>
              <ListItemIcon>
                <img src={menu.img} />
              </ListItemIcon>
              <ListItemText>{menu.title}</ListItemText>
            </MenuItem>
            {index % 2 != 0 && <Divider />}
          </Box>
        ))}
      </Menu>
    </>
  );
}

export default DashDropdown;
