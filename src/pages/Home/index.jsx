import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PetCard from '@Components/PetCard.jsx';
import Pagination from '@Components/Pagination.jsx';

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

      <Box component="section" className="pet-list">
        <Container>
          <Typography
            variant="h5"
            component="h1"
            sx={{ mb: 2, textAlign: 'center' }}
          >
            Find Your Pet
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Button variant="outlined">Filter</Button>
            <Button variant="outlined">Sort</Button>
          </Stack>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12 }}>
              <PetCard />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <PetCard />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <PetCard />
            </Grid>
          </Grid>

          <Pagination />
        </Container>
      </Box>
    </>
  );
};

export default Home;
