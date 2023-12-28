import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <IconButton color="inherit" onClick={toggleDrawer} edge="start">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
             Employee Management
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="Home" />
            <HomeIcon />
          </ListItem>
          <ListItem button component={RouterLink} to="/employee">
            <ListItemText primary="Employee" />
          </ListItem>
          <ListItem button component={RouterLink} to="/add-product">
            <ListItemText primary="Order Item List" />
            <AddBoxIcon />
          </ListItem>
          <ListItem button component={RouterLink} to="/orders">
            <ListItemText primary="Orders" />
            <AssignmentIcon />
          </ListItem>
          <ListItem button component={RouterLink} to="/category">
            <ListItemText primary="My Category" />
            <CategoryIcon />
          </ListItem>
          <ListItem button component={RouterLink} to="/cart">
            <ListItemText primary="My Cart" />
            <ShoppingCartIcon />
          </ListItem>
          <ListItem button component={RouterLink} to="/carts">
            <ListItemText primary="Order ID Search" />
            <SearchIcon />
          </ListItem>
          <ListItem button component={RouterLink} to="/cartss">
            <ListItemText primary="Cart ID Search" />
            <SearchIcon />
          </ListItem>
        </List>
      </Drawer>

      <Container sx={{ marginTop: '20px' }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;