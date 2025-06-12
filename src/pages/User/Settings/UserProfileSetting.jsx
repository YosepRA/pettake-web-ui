import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import user from '@Features/user/index.js';

const { api: userAPI } = user;

const defaultValues = {
  username: 'BigJoe',
  email: 'bigjoe@mail.com',
  name: 'John Smith',
  phone: '+1 1234 8484',
  address: '3434 Bubby Drive Taylor, TX 76574',
};

const UserProfileSetting = function UserProfileSettingComponent() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['user-profile'],
    queryFn: userAPI.getUserProfile,
  });
  const [mode, setMode] = useState('show');

  const handleEditClick = () => {
    setMode('edit');
  };

  const handleEditCancelClick = () => {
    setMode('show');
  };

  const handleFormSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));

    setMode('show');
  };

  if (isPending) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>An error has occurred.</Typography>;

  const initialValues = data ? data.user : defaultValues;

  return (
    <Box component="section" sx={{ mb: { xs: 5 } }}>
      <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
        User Profile
      </Typography>
      {mode === 'show' && (
        <>
          <Box sx={{ mb: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 3 }}>
                <Typography>Username</Typography>
              </Grid>
              <Grid size={{ xs: 9 }}>
                <Typography>: {data?.user.username}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ xs: 3 }}>
                <Typography>Email</Typography>
              </Grid>
              <Grid size={{ xs: 9 }}>
                <Typography>: {data?.user.email}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ xs: 3 }}>
                <Typography>Name</Typography>
              </Grid>
              <Grid size={{ xs: 9 }}>
                <Typography>: {data?.user.name}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ xs: 3 }}>
                <Typography>Phone</Typography>
              </Grid>
              <Grid size={{ xs: 9 }}>
                <Typography>: {data?.user.phone}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ xs: 3 }}>
                <Typography>Address</Typography>
              </Grid>
              <Grid size={{ xs: 9 }}>
                <Typography>: {data?.user.address}</Typography>
              </Grid>
            </Grid>
          </Box>

          <Stack direction="row">
            <Button variant="contained" onClick={handleEditClick}>
              Edit
            </Button>
          </Stack>
        </>
      )}

      {mode === 'edit' && (
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            enableReinitialize
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    label="Username"
                    variant="outlined"
                    disabled
                  />

                  <TextField
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    label="Email"
                    variant="outlined"
                    disabled
                  />

                  <TextField
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    label="Name"
                    variant="outlined"
                  />

                  <TextField
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    label="Phone"
                    variant="outlined"
                  />

                  <TextField
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    label="Address"
                    variant="outlined"
                    multiline
                    rows={4}
                  />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      '& .MuiButton-root': {
                        minWidth: 80,
                      },
                    }}
                  >
                    <Button type="submit" variant="contained">
                      Save
                    </Button>
                    <Button variant="outlined" onClick={handleEditCancelClick}>
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Box>
  );
};

export default UserProfileSetting;
