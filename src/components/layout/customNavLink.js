import React from "react";
import PropTypes from "prop-types"; // Add prop types for better validation
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

  // Check if the current path matches the link's destination
  const isActivePath = location.pathname === to;

  console.log(`Current path: ${location.pathname}`);
  console.log(`Navigating to: ${to}, active: ${isActivePath}`);

  return (
    <NavLink to={to} style={linkStyle} end>
      <ListItemButton
        sx={{ width: "100%", ...(isActivePath && { backgroundColor: "#e0e0e0", fontWeight: "bold" }) }}
        selected={isActivePath}
      >
        <ListItemIcon>
          {Icon ? <Icon /> : <span style={{ color: "red" }}>⚠️</span>} {/* Display warning if Icon is undefined */}
        </ListItemIcon>
        <ListItemText primary={label} sx={listItemTextStyle} />
      </ListItemButton>
    </NavLink>
  );
};

// Define prop types for better error handling
CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // Ensure icon is a component type
};

export default CustomNavLink;
