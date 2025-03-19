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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          pet.images.length > 0
            ? pet.images[0].url
            : 'https://placehold.co/1920x1080?text=No+Image'
        }
        title={pet.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {pet.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
