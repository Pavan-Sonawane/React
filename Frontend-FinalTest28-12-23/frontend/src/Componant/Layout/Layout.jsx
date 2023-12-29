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
import { useNavigate } from 'react-router-dom';
import Logout from '../Authentication/Logout';
const Layout = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleLogout = () => {
   
    navigate('/login');
  };
  return (
    <>
      <AppBar position="static" color="primary">
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleDrawer} edge="start">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Employee Management
            </Typography>
          </div>
          <Logout onLogout={handleLogout} />
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
          <ListItem button component={RouterLink} to="/salary">
            <ListItemText primary="Salary" />
           
          </ListItem>
          <ListItem button component={RouterLink} to="/search">
            <ListItemText primary="All Search" />
            
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