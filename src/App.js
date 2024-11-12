import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Link,
  Container,
  IconButton,
  Typography,
  CssBaseline,
  Drawer,
  Box,
  Toolbar,
  List,
  Divider,
  AppBar as MuiAppBar,
  Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./components/layout/search";
import AppRoutes from "./routes/AppRoutes";

const drawerWidth = 240;
const collapsedDrawerWidth = 60;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#3f51b5",
  color: "#fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
  ...(!open && {
    marginLeft: collapsedDrawerWidth,
    width: `calc(100% - ${collapsedDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

export default function App() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between", pr: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          {open && (
            <Typography component="h1" variant="h6" noWrap sx={{ fontWeight: "500" }}>
              Dashboard - {capitalizeFirstLetter(pathnames.join(" / ")) || "Home"}
            </Typography>
          )}
          <Box sx={{ display: open ? "flex" : "none" }}>
            <Search />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedDrawerWidth,
            backgroundColor: "#ffffff",
            color: "#3f51b5",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            overflowX: "hidden",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard
              })
          }
        }}
      >
        <DrawerHeader>
          {open && (
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#3f51b5" }}>
              Menu
            </Typography>
          )}
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#3f51b5" }}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {mainListItems}
        </List>
        <Divider />
        <List>
          {secondaryListItems}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          backgroundColor: "#f5f5f5",
          padding: (theme) => theme.spacing(4),
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          <AppRoutes navigate={navigate} />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/" target="_blank" rel="noopener noreferrer">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
