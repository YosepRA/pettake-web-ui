import React, { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import pet from '@Features/pet/index.js';
import image from '@Features/image/index.js';
import VisuallyHiddenInput from '@Components/styled/VisuallyHiddenInput.jsx';
import { promiseResolver } from '@Utils/index.js';

import PetFormImagePreview from './PetFormImagePreview.jsx';

const {
  utils: { petFormHelpers },
} = pet;
const { api: imageAPI } = image;

const PetFormImageInput = function PetFormImageInputComponent() {
  const {
    values: { images },
    setFieldValue,
    isSubmitting,
  } = useFormikContext();
  const inputRef = useRef();

  /* ========== Effect Hooks ========== */

  useEffect(() => {
    // Delete all Blob references on form unmount.
    return () => {
      const blobImages = images.filter((img) => img.url.startsWith('blob:'));

      if (blobImages.length > 0) {
        petFormHelpers.cleanBlobImages(blobImages);
      }
    };
  }, [images]);

  /* ========== Event Handlers ========== */

  const handleChange = (event) => {
    const imagePreview = petFormHelpers.createImagePreview(event.target.files);

    setFieldValue('images', images.concat(imagePreview));

    // To reset input value in order to always start fresh whenever there is a change
    // event happen. Because when we don't do this, the file input won't detect change
    // events if we input it with the same set of images between two interactions.
    inputRef.current.value = '';
  };

  const handleDelete = (deletedImage) => {
    if (deletedImage.url.startsWith('blob:')) {
      // If it's a new image, therefore a Blob URL, then revoke it and remove it
      // from Formik state.
      URL.revokeObjectURL(deletedImage.url);

      const newImagesState = images.filter(
        (img) => img.url !== deletedImage.url,
      );

      setFieldValue('images', newImagesState);
    } else if (deletedImage.url.startsWith('https:')) {
      // If it's an old image that is already uploaded to Cloudinary, then add
      // a "delete" action property to "mark it" on form submission that this
      // particular image is supposed to be deleted.

      const newImagesState = images.map((img) =>
        img.url === deletedImage.url ? { ...img, action: 'delete' } : img,
      );

      setFieldValue('images', newImagesState);
    }
  };

  return (
    <>
      {images.length > 0 && (
        <Box sx={{ listStyle: 'none', m: 0, pl: 0 }}>
          <Grid
            container
            columnSpacing={{ xs: 0, sm: 1, md: 2 }}
            sx={{ mb: 2 }}
          >
            {images.map((image) => (
              <PetFormImagePreview
                key={image.url}
                image={image}
                handleDelete={handleDelete}
              />
            ))}
          </Grid>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            disabled={isSubmitting}
            sx={{ width: 1 }}
          >
            Upload Images
            <VisuallyHiddenInput
              type="file"
              onChange={handleChange}
              multiple
              accept="image/*"
              ref={inputRef}
            />
          </Button>
        </Box>
      )}
    </>
  );
};

export default PetFormImageInput;
