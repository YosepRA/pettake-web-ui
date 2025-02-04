import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Pagination = function PaginationComponent() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Button variant="outlined">Prev</Button>

      <Typography>Page 1 of 23</Typography>

      <Button variant="outlined">Next</Button>
    </Stack>
  );
};

export default Pagination;
