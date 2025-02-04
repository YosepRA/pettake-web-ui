import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const MainFooter = function MainFooterComponent() {
  return (
    <Box
      sx={{
        mt: 5,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        fontFamily: 'Comfortaa',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="p">
          PetTake
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default MainFooter;
