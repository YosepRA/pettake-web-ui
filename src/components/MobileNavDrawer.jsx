import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { useAuthentication } from '@Features/user/AuthenticationContext.jsx';

const navigationItems = {
  main: [
    {
      label: 'Home',
      path: '/',
    },
  ],
  user: {
    guest: [
      {
        label: 'Login',
        path: '/user/login',
      },
      {
        label: 'Register',
        path: '/user/register',
      },
    ],
    registered: [
      {
        label: 'Dashboard',
        path: '/user/pet',
      },
    ],
  },
};

const MobileNavDrawer = function MobileNavDrawerComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthentication();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleLogout = () => {
    logout(() => {
      navigate('/');
    });
  };

  return (
    <Box>
      <Button
        onClick={toggleDrawer(true)}
        sx={{ color: 'primary.contrastText', lineHeight: 0 }}
      >
        Menu
      </Button>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navigationItems.main.map(({ label, path }) => (
              <ListItem key={label}>
                <ListItemButton component={RouterLink} to={path}>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {isLoggedIn ? (
            <List>
              {navigationItems.user.registered.map(({ label, path }) => (
                <ListItem key={label}>
                  <ListItemButton component={RouterLink} to={path}>
                    <ListItemText>{label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}

              <ListItem>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          ) : (
            <List>
              {navigationItems.user.guest.map(({ label, path }) => (
                <ListItem key={label}>
                  <ListItemButton component={RouterLink} to={path}>
                    <ListItemText>{label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavDrawer;
