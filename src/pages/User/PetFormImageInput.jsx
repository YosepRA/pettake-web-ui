import React, { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import pet from '@Features/pet/index.js';
import image from '@Features/image/index.js';
import VisuallyHiddenInput from '@Components/styled/VisuallyHiddenInput.jsx';
import { promiseResolver } from '@Utils/index.js';

import PetFormImagePreview from './PetFormImagePreview.jsx';

const { api: imageAPI } = image;

const PetFormImageInput = function PetFormImageInputComponent({
  images,
  setFieldValue,
}) {
  // // To differentiate between old and new images. Useful for form cancellation to
  // // delete only the new images and not the old images when editing, and to delete
  // // all images from server when creating a new pet.
  // const [newImages, setNewImages] = useState([]);

  const inputRef = useRef();

  const handleChange = async (event) => {
    const form = new FormData();

    for (const image of event.target.files) {
      form.append('images', image);
    }

    const [result, uploadError] = await promiseResolver(imageAPI.upload(form));

    if (uploadError || result.status === 'error') {
      console.error('Image upload error:', uploadError || result.message);

      return undefined;
    }

    // Update form state to include the returned upload data.
    setFieldValue('images', images.concat(result.data));

    // To reset input value in order to always start fresh whenever there is a change
    // event happen.
    inputRef.current.value = '';

    return undefined;
  };

  const handleDelete = async (publicId) => {
    // // Temporarily disable image deletion.
    // return undefined;

    const data = { publicId };

    const [result, deleteError] = await promiseResolver(imageAPI.delete(data));

    if (deleteError || result.status === 'error') {
      console.error('Image delete error:', deleteError || result.message);

      return undefined;
    }

    const filterResult = images.filter((img) => img.publicId !== publicId);

    setFieldValue('images', filterResult);

    return undefined;
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
        <VisuallyHiddenInput
          type="file"
          onChange={handleChange}
          multiple
          ref={inputRef}
        />
      </Button>

      {images.length > 0 && (
        <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
          {images.map((image) => (
            <PetFormImagePreview
              key={image.publicId}
              image={image}
              handleDelete={handleDelete}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default PetFormImageInput;
