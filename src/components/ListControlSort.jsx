import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';

const ListControlSort = function ListControlSortComponent() {
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const sortOpen = Boolean(sortAnchorEl);
  const sortId = sortOpen ? 'sort' : undefined;

  return (
    <>
      <Button variant="outlined" onClick={handleSortClick}>
        Sort
      </Button>

      <Popover
        id={sortId}
        open={sortOpen}
        anchorEl={sortAnchorEl}
        onClose={handleSortClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography>Sort popover</Typography>
        </Box>
      </Popover>
    </>
  );
};

export default ListControlSort;
