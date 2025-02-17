import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function createSelectOptions(data) {
  return data.map((value) => (
    <MenuItem key={value} value={value}>
      {value}
    </MenuItem>
  ));
}

function createMultipleCheckboxInput(data, name, values, handleChange) {
  return data.map((value) => (
    <FormControlLabel
      key={value}
      control={
        <Checkbox
          name={name}
          checked={values.includes(value)}
          value={value}
          onChange={handleChange}
        />
      }
      label={value}
    />
  ));
}

const petFormHelpers = { createSelectOptions, createMultipleCheckboxInput };

export default petFormHelpers;
