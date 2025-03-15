import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link as RouterLink, useSearchParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

import pet from '@Features/pet/index.js';
import ListControl from '@Components/ListControl.jsx';
import PetCard from '@Components/PetCard.jsx';
import Pagination from '@Components/Pagination.jsx';

const {
  graphql: { queries },
} = pet;

const UserPetList = function UserPetListComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading, error } = useQuery(queries.GET_USER_PET_LIST, {
    variables: {
      page: searchParams.get('page')
        ? parseInt(searchParams.get('page'), 10)
        : 1,
      sort: searchParams.get('sort') || '-createdAt',
    },
  });

  useEffect(() => {
    if (!searchParams.has('page')) {
      const defaultPageParams = { page: 1 };

      setSearchParams(defaultPageParams);
    }

    return undefined;
  }, [searchParams, setSearchParams]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>An error has occurred.</Typography>;

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
        {data.userPetList?.docs.map((pet) => (
          <Grid key={pet._id} size={{ xs: 12 }}>
            <Link
              to={`${pet._id}/edit`}
              component={RouterLink}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <PetCard pet={pet} />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Pagination
        page={parseInt(searchParams.get('page'), 10)}
        totalPages={data.userPetList.totalPages}
      />
    </Container>
  );
};

export default UserPetList;
