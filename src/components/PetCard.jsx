import React from 'react';
import { Link as RouterLink } from 'react-router';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const PetCard = function PetCardComponent({ pet }) {
  return (
    <Card sx={{ width: 1, maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={
          pet.images.length > 0
            ? pet.images[0].url
            : 'https://placehold.co/1920x1080?text=No+Image'
        }
        title={pet.name}
      />
      <CardContent
        sx={{
          p: 1,
          textAlign: 'center',
          '&.MuiCardContent-root:last-child': {
            pb: 2,
          },
        }}
      >
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0 }}>
          {pet.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {pet.breed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PetCard;
