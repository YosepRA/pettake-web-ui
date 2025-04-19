import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sort = [
  {
    id: 'latest',
    value: '-createdAt',
    label: 'Latest',
  },
  {
    id: 'oldest',
    value: 'createdAt',
    label: 'Oldest',
  },
];

const ListControlSort = function ListControlSortComponent({
  values,
  handleSubmit,
  setFieldValue,
}) {
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleMenuItemClick = (value) => {
    setFieldValue('sort', value);
    handleSubmit();
    setSortAnchorEl(null);
  };

  const sortOpen = Boolean(sortAnchorEl);
  const sortId = sortOpen ? 'sort' : undefined;

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleSortClick}
        startIcon={<FontAwesomeIcon icon="fa-solid fa-sort" />}
        sx={{
          '& .MuiButton-startIcon svg': {
            fontSize: '1rem',
          },
        }}
      >
        Sort
      </Button>

      <Menu
        id={sortId}
        open={sortOpen}
        anchorEl={sortAnchorEl}
        onClose={handleSortClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiMenu-paper': {
            width: 200,
          },
        }}
      >
        {sort.map((sortKey) => (
          <MenuItem
            key={sortKey.id}
            selected={values.sort === sortKey.value}
            onClick={() => handleMenuItemClick(sortKey.value)}
          >
            {sortKey.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ListControlSort;
