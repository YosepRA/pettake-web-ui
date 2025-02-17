import React, { useEffect } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

import ListControl from '@Components/ListControl.jsx';
import PetCard from '@Components/PetCard.jsx';
import Pagination from '@Components/Pagination.jsx';

const UserPetList = function UserPetListComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has('page')) {
      const defaultPageParams = { page: 1 };

      setSearchParams(defaultPageParams);
    }

    return undefined;
  }, [searchParams, setSearchParams]);

  return (
    <Container sx={{ pt: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        component="section"
        sx={{ mb: 1 }}
      >
        <ListControl />

        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="new"
        >
          New Pet
        </Button>
      </Stack>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12 }}>
          <Link
            to="123/edit"
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
            to="123/edit"
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
            to="123/edit"
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
  );
};

export default UserPetList;
