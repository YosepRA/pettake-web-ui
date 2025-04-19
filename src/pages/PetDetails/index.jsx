import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import pet from '@Features/pet/index.js';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const {
  graphql: { queries },
} = pet;

const PetDetails = function PetDetailsComponent() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(queries.GET_PET_DETAILS, {
    variables: { petId: id },
  });

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>An error has occured.</Typography>;

  return (
    <Container sx={{ pt: 2 }}>
      <Box
        component={Swiper}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        tag="section"
        sx={(theme) => ({
          mb: 2,
          '--swiper-pagination-color': theme.palette.primary.main,
        })}
      >
        {data.pet.images.map((img) => (
          <SwiperSlide key={img.url}>
            <Box
              sx={{
                width: 1,
                height: 200,
                borderRadius: 1,
              }}
            >
              <Box
                component="img"
                src={img.url}
                alt={data.pet.name}
                sx={{ width: 1, height: 1, objectFit: 'cover' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Box>

      <Grid container rowSpacing={{ xs: 2 }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
            {data.pet.name}
          </Typography>

          <Box>
            <Typography variant="body1">{data.pet.description}</Typography>
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
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>{data.pet.breed}</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Age</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>{data.pet.age}</Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Gender</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.gender}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Coat Length</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.coatLength}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Prefer Home With</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.preferHomeWith.join(', ')}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>
                Prefer Home Without
              </Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.preferHomeWithout.join(', ')}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Health</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.health.join(', ')}
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body1" component="h2" sx={{ fontWeight: 700 }}>
              Owner Details
            </Typography>

            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Name</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.author.name}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Phone</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.author.phone}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ flex: '1 0 30%' }}>Address</Typography>
              <Typography sx={{ flex: '1 0 10px' }}>:</Typography>
              <Typography sx={{ flex: '1 0 70%' }}>
                {data.pet.author.address}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetails;
