import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PetList from './PetList.jsx';

const Home = function HomeComponent() {
  return (
    <>
      <Box
        component="section"
        className="hero"
        sx={{
          mb: 3,
          pt: 2,
          pb: 4,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" component="p">
          <strong>Your Pet Buddy</strong> is
        </Typography>
        <Typography variant="h6" component="p">
          waiting for you
        </Typography>
      </Box>

      <PetList />
    </>
  );
};

export default Home;
