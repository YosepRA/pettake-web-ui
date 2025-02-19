import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { uploadImages } from '@Features/pet/utils/index.js';
import VisuallyHiddenInput from '@Components/styled/VisuallyHiddenInput.jsx';

const PetFormImageInput = function PetFormImageInputComponent({
  images,
  setFieldValue,
}) {
  const handleChange = (event) => {
    // Upload images to server.
    const uploadResult = uploadImages(event.target.files);

    // Update form state to include the returned upload data.
    setFieldValue('images', images.concat(uploadResult));
  };

  const handleDelete = (publicId) => {
    const filterResult = images.filter((image) => image.publicId !== publicId);

    setFieldValue('images', filterResult);
  };

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
      >
        Upload Images
        <VisuallyHiddenInput type="file" onChange={handleChange} multiple />
      </Button>

      {images.length > 0 && (
        <Box component="ul">
          {images.map((image) => (
            <li
              key={image.publicId}
              onClick={() => handleDelete(image.publicId)}
            >
              {image.url}
            </li>
          ))}
        </Box>
      )}
    </>
  );
};

export default PetFormImageInput;
