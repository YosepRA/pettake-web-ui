import React from 'react';
import { Link as RouterLink } from 'react-router';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const PetCard = function PetCardComponent() {
  return (
    <Link
      to="/pet/123"
      component={RouterLink}
      sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co.com/GfN2FV4M/pauline-loroy-U3a-F7hg-USrk-unsplash.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doggo
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            cumque quas repudiandae fugit ratione sequi.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default PetCard;
