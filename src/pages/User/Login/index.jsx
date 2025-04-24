import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Formik, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useAuthentication } from '@Features/user/AuthenticationContext.jsx';
import { promiseResolver } from '@Utils/index.js';

const defaultValues = {
  username: '',
  password: '',
};

const Login = function LoginComponent() {
  const { login, isLoggedIn } = useAuthentication();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const { from } = location.state || { from: { pathname: '/' } };

      navigate(from);
    }
  }, [isLoggedIn]);

  const handleFormSubmit = async (values) => {
    const [result, loginError] = await promiseResolver(login(values));

    if (loginError) {
      console.error('Login error:', loginError);

      return undefined;
    }

    const { from } = location.state || { from: { pathname: '/' } };

    navigate(from, { replace: true });

    return undefined;
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
          <Typography variant="h5" component="h1" sx={{ color: 'inherit' }}>
            User Login
          </Typography>
          <Typography variant="subtitle2">Log into your account</Typography>
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
                  autoFocus
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

                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>

        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          You don&apos;t have an account?{' '}
          <Link to="../register">Register here.</Link>
        </Typography>
      </Container>
    </Stack>
  );
};

export default Login;
