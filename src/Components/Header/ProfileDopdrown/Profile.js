import React, { useState } from "react";
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles } from "./Profile.styles";

const data = [
  { img: "images/Header/profile/my_account.svg", title: "my account" },
  { img: "images/Header/profile/setup.svg", title: "setup" },
  { img: "images/Header/profile/help.svg", title: "help" },
  { img: "images/Header/profile/logout.svg", title: "logout" },
];

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.headerTxtColor.main,
  fontSize: "13px",
  textTransform: "capitalize",
  "&:hover": {
    background: "none",
  },

  "& .MuiButton-endIcon": {
    marginLeft: 0,
  },
  "& .MuiButton-startIcon": {
    marginRight: "4px",
    "& .MuiSvgIcon-root": {
      fontSize: "19px",
    },
  },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));

function Profile() {
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
      <CustomButton
        startIcon={<img src="images/Header/profile/profile.svg" />}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleOpen}
      >
        Profile
      </CustomButton>
      {/* dropdown */}
      <Menu open={Boolean(dropAnchor)} anchorEl={dropAnchor} onClose={handleClose} className={classes.MenuDrop}>
        {data.map((item, index) => (
          <MenuItem className={classes.menuItem} onClick={handleClose} key={index}>
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

export default Profile;
