import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams, Link as RouterLink } from 'react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

import pet from '@Features/pet/index.js';
import ListControl from '@Components/ListControl.jsx';
import PetCard from '@Components/PetCard.jsx';
import Pagination from '@Components/Pagination.jsx';
import useParseListControlSearch from '@Components/hooks/useParseListControlSearch.jsx';

const {
  graphql: { queries },
} = pet;

const PetList = function PetListComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedSearch = useParseListControlSearch();

  // Todo: Implement filter.
  const queryVariables = {
    page: searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1,
    sort: searchParams.get('sort') || '-createdAt',
    ...parsedSearch,
  };

  const { data, loading, error } = useQuery(queries.GET_PET_LIST, {
    variables: queryVariables,
  });

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>An error has occurred.</Typography>;

  return (
    <Box component="section" className="pet-list">
      <Container>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mb: 2,
            fontFamily: 'Comfortaa',
            textAlign: 'center',
            color: 'primary.main',
          }}
        >
          Find Your Pet
        </Typography>

        <Box sx={{ mb: 2 }}>
          <ListControl />
        </Box>

        <Grid container spacing={2} sx={{ mb: { xs: 3, sm: 5 } }}>
          {data.petList?.docs.map((pet) => (
            <Grid key={pet._id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Link
                to={`/pet/${pet._id}`}
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
          totalPages={data.petList.totalPages}
        />
      </Container>
    </Box>
  );
};

export default PetList;
