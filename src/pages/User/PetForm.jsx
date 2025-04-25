import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, useLocation, useNavigate } from 'react-router';
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
import { promiseResolver, cleanGQLTypename } from '@Utils/index.js';

import PetFormImageInput from './PetFormImageInput.jsx';

const {
  graphql: { queries, mutations },
  utils: { petFormHelpers },
} = pet;

const defaultValues = {
  name: '',
  breed: '',
  age: '',
  gender: '',
  coatLength: '',
  preferHomeWith: [],
  preferHomeWithout: [],
  health: [],
  description: '',
  images: [],
};

const PetForm = function PetFormComponent() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const editPathPattern = /\/user\/pet\/\w+\/edit/;
  const isEditPage = editPathPattern.test(location.pathname);

  /* ========== GraphQL Interfaces and Component States ========== */

  const {
    data: queryData,
    loading: queryLoading,
    error: queryError,
  } = useQuery(queries.GET_USER_PET_DETAILS, {
    variables: {
      petId: id,
    },
    skip: !isEditPage,
  });
  const [createNewPet, { error: createError }] = useMutation(
    mutations.CREATE_NEW_PET,
  );
  const [editPet, { error: editError }] = useMutation(mutations.EDIT_PET, {
    refetchQueries: [queries.GET_USER_PET_DETAILS],
  });

  /* ========== Event Handler ========== */

  const handleFormSubmit = async (values) => {
    // Process the images first.
    const [{ imageResult, blobImages }, processImageError] =
      await promiseResolver(petFormHelpers.processImage(values.images));

    if (processImageError) {
      console.error('Process image error:', processImageError);

      return undefined;
    }

    // Send mutation request to GraphQL server.
    const mutateFn = isEditPage ? editPet : createNewPet;

    values = { ...values, images: imageResult };

    const variables = isEditPage
      ? { petId: id, petUpdates: values }
      : { pet: values };

    const [mutationResult, mutationError] = await promiseResolver(
      mutateFn({ variables }),
    );

    if (mutationError) {
      console.error('Form submission error:', mutationError);

      return undefined;
    }

    // Navigate to user dashboard index and cleanup blob data.
    navigate('/user/pet');

    petFormHelpers.cleanBlobImages(blobImages);

    return undefined;
  };

  /* ========== Component Buildup ========== */

  const ageOptions = petFormHelpers.createSelectOptions(petInputData.ages);
  const genderOptions = petFormHelpers.createSelectOptions(
    petInputData.genders,
  );
  const coatLengthOptions = petFormHelpers.createSelectOptions(
    petInputData.coatLengths,
  );

  const initialValues =
    editPathPattern.test(location.pathname) && queryData
      ? cleanGQLTypename(queryData.pet)
      : defaultValues;

  /* ========== Render ========== */

  if (queryLoading) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ pt: 4 }}>
      {createError ||
        (editError && (
          <Typography color="error" sx={{ textAlign: 'center' }}>
            {createError?.message || editError?.message}
          </Typography>
        ))}

      <Typography
        variant="h5"
        component="h1"
        sx={{
          mb: 3,
          fontFamily: 'Comfortaa',
          textAlign: 'center',
          color: 'primary.main',
        }}
      >
        {location.pathname.match(editPathPattern) ? 'Edit Pet' : 'Create Pet'}
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="stretch" rowGap={2}>
              <TextField
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                label="Name"
                variant="outlined"
                disabled={isSubmitting}
              />

              <TextField
                id="breed"
                name="breed"
                value={values.breed}
                onChange={handleChange}
                label="Breed"
                variant="outlined"
                disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                >
                  {coatLengthOptions}
                </Select>
              </FormControl>

              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">Prefer Home With</FormLabel>

                <FormGroup>
                  {petFormHelpers.createMultipleCheckboxInput(
                    petInputData.preferHomes,
                    'preferHomeWith',
                    values.preferHomeWith,
                    handleChange,
                    isSubmitting,
                  )}
                </FormGroup>
              </FormControl>

              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">Prefer Home Without</FormLabel>

                <FormGroup>
                  {petFormHelpers.createMultipleCheckboxInput(
                    petInputData.preferHomes,
                    'preferHomeWithout',
                    values.preferHomeWithout,
                    handleChange,
                    isSubmitting,
                  )}
                </FormGroup>
              </FormControl>

              <FormControl fullWidth component="fieldset">
                <FormLabel component="legend">Health</FormLabel>

                <FormGroup>
                  {petFormHelpers.createMultipleCheckboxInput(
                    petInputData.healths,
                    'health',
                    values.health,
                    handleChange,
                    isSubmitting,
                  )}
                </FormGroup>
              </FormControl>

              <TextField
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                label="Description"
                variant="outlined"
                multiline
                rows={5}
                disabled={isSubmitting}
              />

              <PetFormImageInput />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
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
