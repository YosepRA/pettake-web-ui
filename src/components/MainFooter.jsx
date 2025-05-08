import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const MainFooter = function MainFooterComponent() {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 5, md: 7 },
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        fontFamily: 'Comfortaa',
      }}
    >
      <Container sx={{ px: { xs: 0, sm: 0 } }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontFamily: 'Blueberry Regular',
              color: 'primary.contrastText',
            }}
          >
            PetTake
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default MainFooter;
