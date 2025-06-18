import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import user from '@Features/user/index.js';
import { includeObjectProperties } from '@Utils/index.js';

const { api: userAPI } = user;

const defaultValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordRepeat: '',
};

const UserPasswordSetting = function UserPasswordSettingComponent() {
  const changeUserPassword = useMutation({
    mutationFn: userAPI.changeUserPassword,
  });

  const handleFormSubmit = (values, { resetForm }) => {
    const userUpdateData = includeObjectProperties(values, [
      'oldPassword',
      'newPassword',
    ]);

    changeUserPassword.mutate(userUpdateData, {
      onSuccess: (data) => {
        if (data.status === 'error') {
          console.error('User password update error:', data.message);

          return undefined;
        }

        resetForm();

        return undefined;
      },
      onError: (error) => {
        console.error('User password update error.', error);
      },
    });
  };

  return (
    <Box component="section">
      <Typography variant="h6" component="h2" sx={{ mb: { xs: 2 } }}>
        User Password
      </Typography>

      <Formik initialValues={defaultValues} onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack direction="column" rowGap={1}>
              <TextField
                id="oldPassword"
                name="oldPassword"
                type="password"
                value={values.oldPassword}
                onChange={handleChange}
                label="Old Password"
                variant="outlined"
              />

              <TextField
                id="newPassword"
                name="newPassword"
                type="password"
                value={values.newPassword}
                onChange={handleChange}
                label="New Password"
                variant="outlined"
              />

              {/* Implement repeat password later... */}
              {/* <TextField
              id="newPasswordRepeat"
              name="newPasswordRepeat"
              type="password"
              value={values.newPasswordRepeat}
              onChange={handleChange}
              label="Repeat New Password"
              variant="outlined"
            /> */}

              <Stack direction="row" columnGap={1} sx={{ mt: 1 }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                <Button type="button" variant="outlined" color="primary">
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UserPasswordSetting;
