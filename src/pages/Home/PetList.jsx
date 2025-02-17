import React, { useEffect } from 'react';
import { useSearchParams, Link as RouterLink } from 'react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

import ListControl from '@Components/ListControl.jsx';
import PetCard from '@Components/PetCard.jsx';
import Pagination from '@Components/Pagination.jsx';

const PetList = function PetListComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   if (searchParams.size === 0) return undefined;

  //   for (const [key, value] of searchParams.entries()) {
  //     console.log('🚀 ~ useEffect ~ key:', key);
  //     console.log('🚀 ~ useEffect ~ value:', value);
  //   }

  //   console.log('Load data...');

  //   return undefined;
  // }, [searchParams]);

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

        <Box sx={{ mb: 1 }}>
          <ListControl />
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12 }}>
            <Link
              to="/pet/123"
              component={RouterLink}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <PetCard />
            </Link>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Link
              to="/pet/123"
              component={RouterLink}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <PetCard />
            </Link>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Link
              to="/pet/123"
              component={RouterLink}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <PetCard />
            </Link>
          </Grid>
        </Grid>

        <Pagination
          page={parseInt(searchParams.get('page'), 10)}
          totalPages={23}
        />
      </Container>
    </Box>
  );
};

export default PetList;
