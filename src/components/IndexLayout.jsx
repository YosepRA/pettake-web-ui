import React from 'react';
import { Outlet } from 'react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MainNavbar from './MainNavbar.jsx';
import MainFooter from './MainFooter.jsx';

const IndexLayout = function IndexLayoutComponent() {
  return (
    <>
      <MainNavbar />

      <Box
        component="main"
        className="main-container"
        sx={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <Outlet />
      </Box>

      <MainFooter />
    </>
  );
};

export default IndexLayout;
