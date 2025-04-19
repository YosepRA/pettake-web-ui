import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PetFormImageReview = function PetFormImageReviewComponent({
  image,
  handleDelete,
}) {
  return (
    <Box component="li" sx={{ '&:not(:last-child)': { mb: 1 } }}>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          height: 120,
          maxWidth: 180,
          bgcolor: grey[300],
          background: `no-repeat center/cover url(${image.url})`,
        }}
      >
        <IconButton
          color="error"
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => handleDelete(image.publicId)}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PetFormImageReview;
