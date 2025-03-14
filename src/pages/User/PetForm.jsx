import React from 'react';
import { useParams, useLocation } from 'react-router';
import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import { petInputData } from '@Data/index.js';
import pet from '@Features/pet/index.js';

import PetFormImageInput from './PetFormImageInput.jsx';

const defaultValues = {
  name: '',
  breed: '',
  age: '',
  gender: '',
  coatLength: '',
  preferHomeWith: [],
  preferHomeWithout: [],
  health: [],
  images: [],
  description: [],
};

const PetForm = function PetFormComponent() {
  const { id } = useParams();
  const location = useLocation();
  const editPathPattern = /\/user\/pet\/\w+\/edit/;

  const handleFormSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  const ageOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.ages,
  );
  const genderOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.genders,
  );
  const coatLengthOptions = pet.utils.petFormHelpers.createSelectOptions(
    petInputData.coatLengths,
  );

  return (
    <Container sx={{ pt: 2 }}>
      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 2, textAlign: 'center' }}
      >
        {location.pathname.match(editPathPattern) ? 'Edit Pet' : 'Create Pet'}
      </Typography>

      <Formik initialValues={defaultValues} onSubmit={handleFormSubmit}>
        {({ values, handleChange, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="stretch" rowGap={2}>
              <TextField
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                label="Name"
                variant="outlined"
              />

              <TextField
                id="breed"
                name="breed"
                value={values.breed}
                onChange={handleChange}
                label="Breed"
                variant="outlined"
              />

              <FormControl fullWidth>
                <InputLabel id="age">Age</InputLabel>

                <Select
                  labelId="age"
                  id="age"
                  name="age"
                  value={values.age}
                  label="Age"
                  onChange={handleChange}
                >
                  {ageOptions}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="gender">Gender</InputLabel>

                <Select
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={values.gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  {genderOptions}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="coatLength">Coat Length</InputLabel>

                <Select
                  labelId="coatLength"
                  id="coatLength"
                  name="coatLength"
                  value={values.coatLength}
                  label="Coat Length"
                  onChange={handleChange}
                >
                  {coatLengthOptions}
                </Select>
              </FormControl>

              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">Prefer Home With</FormLabel>

                <FormGroup>
                  {pet.utils.petFormHelpers.createMultipleCheckboxInput(
                    petInputData.preferHomes,
                    'preferHomeWith',
                    values.preferHomeWith,
                    handleChange,
                  )}
                </FormGroup>
              </FormControl>

              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">Prefer Home Without</FormLabel>

                <FormGroup>
                  {pet.utils.petFormHelpers.createMultipleCheckboxInput(
                    petInputData.preferHomes,
                    'preferHomeWithout',
                    values.preferHomeWithout,
                    handleChange,
                  )}
                </FormGroup>
              </FormControl>

              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">Health</FormLabel>

                <FormGroup>
                  {pet.utils.petFormHelpers.createMultipleCheckboxInput(
                    petInputData.healths,
                    'health',
                    values.health,
                    handleChange,
                  )}
                </FormGroup>
              </FormControl>

              <PetFormImageInput
                images={values.images}
                setFieldValue={setFieldValue}
              />

              <Button type="submit" variant="contained" color="primary">
                {location.pathname.match(editPathPattern) ? 'Save' : 'Create'}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default PetForm;
