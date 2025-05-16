import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = ({ book, chapter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Top Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#312e28" }}>
        <Toolbar>
          {/* Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Book and Chapter Display */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
          >
            {book} {chapter}
          </Typography>

          {/* Search Button */}
          <IconButton edge="end" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Bookmarks" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TopBar;