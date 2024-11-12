import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const CustomNavLink = ({ to, label, icon: Icon }) => {
  const location = useLocation();
  const listItemTextStyle = { color: "#a19f99" };
  const linkStyle = {
    textDecoration: "none",
    width: "100%",
  };

  // Check if path matches and add logging
  const isActivePath = location.pathname === to;
  console.log(`Current path: ${location.pathname}`);
  console.log(`Navigating to: ${to}, active: ${isActivePath}`);

  return (
    <NavLink to={to} style={linkStyle} end>
      {({ isActive }) => {
        const activeStyle = isActive
          ? { backgroundColor: "#e0e0e0", fontWeight: "bold" }
          : {};

        return (
          <ListItemButton
            sx={{ width: "100%", ...activeStyle }}
            selected={isActive}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} sx={listItemTextStyle} />
          </ListItemButton>
        );
      }}
    </NavLink>
  );
};

export default CustomNavLink;
