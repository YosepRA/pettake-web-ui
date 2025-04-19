import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { petInputData } from '@Data/index.js';
import pet from '@Features/pet/index.js';

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

  const handleFilterSubmit = () => {
    setFilterAnchorEl(null);
    handleSubmit();
  };

  const filterOpen = Boolean(filterAnchorEl);
  const filterId = filterOpen ? 'filter' : undefined;

  const breedOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.breeds,
  );
  const ageOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.ages,
  );
  const genderOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.genders,
  );
  const coatLengthOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.coatLengths,
  );

  const preferHomeWithOptions =
    pet.utils.petFormHelpers.createMultipleCheckboxInput(
      petInputData.preferHomes,
      'preferHomeWith',
      values.preferHomeWith,
      handleChange,
    );
  const preferHomeWithoutOptions =
    pet.utils.petFormHelpers.createMultipleCheckboxInput(
      petInputData.preferHomes,
      'preferHomeWithout',
      values.preferHomeWithout,
      handleChange,
    );
  const healthOptions = pet.utils.petFormHelpers.createMultipleCheckboxInput(
    petInputData.healths,
    'health',
    values.health,
    handleChange,
  );

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleFilterClick}
        startIcon={<FontAwesomeIcon icon="fa-solid fa-filter" />}
        sx={{
          '& .MuiButton-startIcon svg': {
            fontSize: '0.8rem',
          },
        }}
      >
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
        sx={{
          '& .MuiPopover-paper': {
            width: 1,
            maxHeight: 360,
          },
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
          <FormControl fullWidth>
            <InputLabel id="breed">Breed</InputLabel>
            <Select
              labelId="breed"
              id="breed"
              value={values.breed}
              label="Breed"
              name="breed"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              {breedOptions}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="age">Age</InputLabel>
            <Select
              labelId="age"
              id="age"
              value={values.age}
              label="Age"
              name="age"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              {ageOptions}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={values.gender}
              label="Gender"
              name="gender"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              {genderOptions}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="coatLength">Coat Length</InputLabel>
            <Select
              labelId="coatLength"
              id="coatLength"
              value={values.coatLength}
              label="Coat Length"
              name="coatLength"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              {coatLengthOptions}
            </Select>
          </FormControl>

          <FormControl fullWidth component="fieldset">
            <FormLabel component="legend">Prefer Home With</FormLabel>

            <FormGroup>{preferHomeWithOptions}</FormGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset">
            <FormLabel component="legend">Prefer Home Without</FormLabel>

            <FormGroup>{preferHomeWithoutOptions}</FormGroup>
          </FormControl>

          <FormControl fullWidth component="fieldset">
            <FormLabel component="legend">Health</FormLabel>

            <FormGroup>{healthOptions}</FormGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleFilterSubmit}
          >
            Apply
          </Button>
        </Stack>
      </Popover>
    </>
  );
};

export default ListControlFilter;
