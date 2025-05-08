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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navigationItems } from '@Data/index.js';
import { useAuthentication } from '@Features/user/AuthenticationContext.jsx';
import { promiseResolver } from '@Utils/index.js';

const MobileNavDrawer = function MobileNavDrawerComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthentication();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => (event) => {
    // if (!newOpen && event.target.tagName.toLowerCase() === 'span') {
    //   setDrawerOpen(newOpen);
    // } else if (newOpen) {
    //   setDrawerOpen(newOpen);
    // }

    setDrawerOpen(newOpen);
  };

  const handleLogout = async () => {
    navigate('/');

    const [result, logoutError] = await promiseResolver(logout());

    if (logoutError) {
      console.error('Logout error:', logoutError);

      return undefined;
    }

    return undefined;
  };

  return (
    <Box sx={{ display: { md: 'none' } }}>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          minWidth: 0,
          color: 'primary.contrastText',
          lineHeight: 0,
          fontSize: 24,
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </Button>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: 1,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            '& .MuiListItemButton-root': {
              p: 0,
            },
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Typography
            variant="display5"
            sx={{ display: 'block', px: 2, py: 2 }}
          >
            PetTake
          </Typography>

          <List>
            {navigationItems.main.map(({ label, path }) => (
              <ListItem key={label}>
                <ListItemButton component={RouterLink} to={path}>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

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
