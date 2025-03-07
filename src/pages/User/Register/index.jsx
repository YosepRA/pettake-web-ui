import React from 'react';
import { Link } from 'react-router';
import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const defaultValues = {
  username: '',
  email: '',
  name: '',
  password: '',
  repeatPassword: '',
};

const Register = function RegisterComponent() {
  const handleFormSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Stack>
      <Container
        sx={{ mb: 3, bgcolor: 'primary.main', color: 'primary.contrastText' }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          component="section"
          gap={1}
          sx={{
            pt: 4,
            pb: 6,
          }}
        >
          <Typography variant="h5" component="h1">
            User Registration
          </Typography>
          <Typography variant="subtitle2">Create a new user account</Typography>
        </Stack>
      </Container>

      <Container>
        <Formik initialValues={defaultValues} onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Stack direction="column" alignItems="stretch" gap={2}>
                <TextField
                  id="username"
                  name="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  label="Username"
                  variant="outlined"
                />

                <TextField
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  label="Email"
                  variant="outlined"
                />

                <TextField
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  label="Name"
                  variant="outlined"
                />

                <TextField
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  label="Password"
                  variant="outlined"
                />

                <TextField
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  value={values.repeatPassword}
                  onChange={handleChange}
                  label="Repeat Password"
                  variant="outlined"
                />

                <Button type="submit" variant="contained">
                  Register
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>

        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Already have an account? <Link to="../login">Login here.</Link>
        </Typography>
      </Container>
    </Stack>
  );
};

export default Register;
