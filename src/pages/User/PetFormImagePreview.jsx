import React from 'react';
import { useFormikContext } from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PetFormImageReview = function PetFormImageReviewComponent({
  image,
  handleDelete,
}) {
  const { isSubmitting } = useFormikContext();

  // If the old (uploaded) images are about to be deleted, then don't show it on
  // the preview section.
  if (image.action && image.action === 'delete') return undefined;

  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      sx={{ '&:not(:last-child)': { mb: 1 } }}
    >
      <Box sx={{ position: 'relative', width: { xs: '60%', sm: 1 } }}>
        <Box
          component="img"
          src={image.url}
          sx={{
            width: 1,
            aspectRatio: '16 / 9',
          }}
        />

        <IconButton
          color="error"
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => handleDelete(image)}
          disabled={isSubmitting}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default PetFormImageReview;
