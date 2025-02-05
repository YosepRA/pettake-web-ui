import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import ListControl from '@Components/ListControl.jsx';
import PetCard from '@Components/PetCard.jsx';
import Pagination from '@Components/Pagination.jsx';

const PetList = function PetListComponent() {
  return (
    <Box component="section" className="pet-list">
      <Container>
        <Typography
          variant="h5"
          component="h1"
          sx={{ mb: 2, textAlign: 'center' }}
        >
          Find Your Pet
        </Typography>

        <ListControl />

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
  );
};

export default PetList;
