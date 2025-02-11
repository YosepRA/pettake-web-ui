import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

const PetDetails = function PetDetailsComponent() {
  return (
    <Container sx={{ pt: 2 }}>
      <Box
        sx={{
          width: 1,
          height: 220,
          mb: 2,
          borderRadius: 1,
          bgcolor: grey[300],
        }}
      />

      <Grid container rowSpacing={{ xs: 2 }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
            Michi
          </Typography>

          <Box>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quis dolores culpa nisi rem enim sit ducimus illum error earum
              deleniti, odio excepturi nobis alias necessitatibus velit
              doloremque sapiente animi!
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body1"
              component="h2"
              sx={{ mb: 0.5, fontWeight: 700 }}
            >
              Pet Details
            </Typography>

            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Breed</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: Labrador</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Age</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: Puppy</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Gender</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: Female</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Coat Length</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: Short</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Prefer Home With</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                : Other dogs, Children
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>
                Prefer Home Without
              </Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: Other cats</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Health</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                : Vaccinated, Spayed/Neutered
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body1" component="h2" sx={{ fontWeight: 700 }}>
              Owner Details
            </Typography>

            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Name</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: John Smith</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Phone</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>: +1 123 1234</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Address</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                : 3434 Bubby Drive Taylor, TX 76574
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetails;
