import React from 'react';
import { useSearchParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Pagination = function PaginationComponent({ page, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePrevButtonClick = () => {
    if (page <= 1) return undefined;

    setSearchParams((prev) => {
      prev.set('page', page - 1);
      return prev;
    });

    return undefined;
  };

  const handleNextButtonClick = () => {
    if (page >= totalPages) return undefined;

    setSearchParams((prev) => {
      prev.set('page', page + 1);
      return prev;
    });

    return undefined;
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Button
        variant="outlined"
        onClick={handlePrevButtonClick}
        disabled={page <= 1}
      >
        Prev
      </Button>

      <Typography>
        Page {page} of {totalPages}
      </Typography>

      <Button
        variant="outlined"
        onClick={handleNextButtonClick}
        disabled={page >= totalPages}
      >
        Next
      </Button>
    </Stack>
  );
};

export default Pagination;
