import React from 'react';
import { Link as RouterLink } from 'react-router';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { useAuthentication } from '@Features/user/AuthenticationContext.jsx';

import MobileNavDrawer from './MobileNavDrawer.jsx';

const MainNavbar = function MainNavbarComponent() {
  const { isLoggedIn, logout } = useAuthentication();

  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            py: { md: 1 },
          }}
        >
          <Link to="/" component={RouterLink}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontFamily: 'Blueberry Regular',
                color: 'primary.contrastText',
              }}
            >
              PetTake
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flex: 1,
              '& .MuiTypography-root': {
                display: 'inline-block',

                '&:not(:last-child)': {
                  mr: 1,
                },
              },
            }}
          >
            <Box>
              <Link
                to="/"
                component={RouterLink}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Typography variant="body2">Home</Typography>
              </Link>
            </Box>

            <Box>
              <Link
                to="/"
                component={RouterLink}
                sx={{
                  display: isLoggedIn ? 'none' : 'inline-block',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="body2">Login</Typography>
              </Link>

              <Link
                to="/"
                component={RouterLink}
                sx={{
                  display: isLoggedIn ? 'none' : 'inline-block',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="body2">Register</Typography>
              </Link>
            </Box>
          </Box>

          <MobileNavDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
