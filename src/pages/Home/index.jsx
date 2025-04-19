import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PetList from './PetList.jsx';

const Home = function HomeComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has('page')) {
      const defaultPageParams = { page: 1 };

      setSearchParams(defaultPageParams);
    }

    return undefined;
  }, [searchParams, setSearchParams]);

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
          fontWeight: 400,
        }}
      >
        <Typography
          variant="body"
          component="p"
          sx={{
            fontSize: 'h6.fontSize',
            fontWeight: 'inherit',
            '& strong': {
              fontWeight: 500,
            },
          }}
        >
          <strong>Your Pet Buddy</strong> is
        </Typography>
        <Typography
          variant="body"
          component="p"
          sx={{ fontSize: 'h6.fontSize', fontWeight: 'inherit' }}
        >
          waiting for you
        </Typography>
      </Box>

      <PetList />
    </>
  );
};

export default Home;
