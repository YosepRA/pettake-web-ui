import React, { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import pet from '@Features/pet/index.js';
import image from '@Features/image/index.js';
import VisuallyHiddenInput from '@Components/styled/VisuallyHiddenInput.jsx';
import { promiseResolver } from '@Utils/index.js';

import PetFormImagePreview from './PetFormImagePreview.jsx';

const {
  utils: { petFormHelpers },
} = pet;
const { api: imageAPI } = image;

function createImagePreview(images) {
  const result = [];

  for (const img of images) {
    const previewUrl = URL.createObjectURL(img);
    const imagePreview = {
      url: previewUrl,
      file: img,
    };

    result.push(imagePreview);
  }

  return result;
}

const PetFormImageInput = function PetFormImageInputComponent({
  images,
  setFieldValue,
}) {
  const inputRef = useRef();

  // const handleChange = async (event) => {
  //   const form = new FormData();

  //   for (const image of event.target.files) {
  //     form.append('images', image);
  //   }

  //   const [result, uploadError] = await promiseResolver(imageAPI.upload(form));

  //   if (uploadError || result.status === 'error') {
  //     console.error('Image upload error:', uploadError || result.message);

  //     return undefined;
  //   }

  //   // Update form state to include the returned upload data.
  //   setFieldValue('images', images.concat(result.data));

  //   // To reset input value in order to always start fresh whenever there is a change
  //   // event happen.
  //   inputRef.current.value = '';

  //   return undefined;
  // };

  // const handleDelete = async (publicId) => {
  //   // // Temporarily disable image deletion.
  //   // return undefined;

  //   const data = { publicId };

  //   const [result, deleteError] = await promiseResolver(imageAPI.delete(data));

  //   if (deleteError || result.status === 'error') {
  //     console.error('Image delete error:', deleteError || result.message);

  //     return undefined;
  //   }

  //   const filterResult = images.filter((img) => img.publicId !== publicId);

  //   setFieldValue('images', filterResult);

  //   return undefined;
  // };

  /* ========== Effect Hooks ========== */

  useEffect(() => {
    return () => {
      const blobImages = images.filter((img) => img.url.startsWith('blob:'));

      petFormHelpers.cleanBlobImages(blobImages);
    };
  }, [images]);

  /* ========== Event Handlers ========== */

  const handleChange = (event) => {
    const imagePreview = createImagePreview(event.target.files);

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
          accept="image/*"
          ref={inputRef}
        />
      </Button>

      {images.length > 0 && (
        <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
          {images.map((image) => (
            <PetFormImagePreview
              key={image.url}
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
