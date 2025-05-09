import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { navigationItems } from '@Data/index.js';
import { useAuthentication } from '@Features/user/AuthenticationContext.jsx';
import { promiseResolver } from '@Utils/index.js';

import MobileNavDrawer from './MobileNavDrawer.jsx';

const MainNavbar = function MainNavbarComponent() {
  const { isLoggedIn, logout } = useAuthentication();
  const navigate = useNavigate();

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
    <Box component="nav">
      <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
        <Container sx={{ px: { xs: 0, sm: 0 } }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              py: { md: 1 },
              columnGap: { md: 6 },
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
                justifyContent: { md: 'space-between' },
                flex: 1,
                '& .MuiTypography-root': {
                  display: 'inline-block',

                  '&:not(:last-child)': {
                    mr: 2,
                  },
                },
              }}
            >
              <Box>
                {navigationItems.main.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    component={RouterLink}
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <Typography variant="body2">{label}</Typography>
                  </Link>
                ))}
              </Box>

              <Box>
                {isLoggedIn ? (
                  <>
                    {navigationItems.user.registered.map(({ label, path }) => (
                      <Link
                        key={label}
                        to={path}
                        component={RouterLink}
                        sx={{
                          display: 'inline-block',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        <Typography variant="body2">{label}</Typography>
                      </Link>
                    ))}

                    <Link
                      onClick={handleLogout}
                      sx={{
                        display: 'inline-block',
                        color: 'inherit',
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <Typography variant="body2">Logout</Typography>
                    </Link>
                  </>
                ) : (
                  <>
                    {navigationItems.user.guest.map(({ label, path }) => (
                      <Link
                        key={label}
                        to={path}
                        component={RouterLink}
                        sx={{
                          display: 'inline-block',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        <Typography variant="body2">{label}</Typography>
                      </Link>
                    ))}
                  </>
                )}
              </Box>
            </Box>

            <MobileNavDrawer />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
