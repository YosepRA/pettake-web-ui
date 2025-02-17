import React from 'react';
import { Link as RouterLink } from 'react-router';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const MainNavbar = function MainNavbarComponent() {
  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar sx={{ columnGap: 2 }}>
          <Link to="/" component={RouterLink}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: 'Comfortaa', color: 'primary.contrastText' }}
            >
              PetTake
            </Typography>
          </Link>

          <Box
            sx={{
              '& .MuiTypography-root': {
                display: 'inline-block',

                '&:not(:last-child)': {
                  mr: 1,
                },
              },
            }}
          >
            <Link
              to="/user"
              component={RouterLink}
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Typography>User</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
