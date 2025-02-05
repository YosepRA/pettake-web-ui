import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ListControlFilter = function ListControlFilterComponent({
  values,
  handleChange,
  handleSubmit,
}) {
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const filterOpen = Boolean(filterAnchorEl);
  const filterId = filterOpen ? 'filter' : undefined;

  return (
    <>
      <Button variant="outlined" onClick={handleFilterClick}>
        Filter
      </Button>

      <Popover
        id={filterId}
        open={filterOpen}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={1}
          sx={{
            p: 2,
          }}
        >
          <TextField
            name="breed"
            value={values.breed}
            onChange={handleChange}
            label="Breed"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Stack>
      </Popover>
    </>
  );
};

export default ListControlFilter;
