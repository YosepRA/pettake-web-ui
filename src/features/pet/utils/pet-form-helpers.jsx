import { useFormikContext } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import image from '@Features/image/index.js';
import { promiseResolver } from '@Utils/index.js';

const { api: imageAPI } = image;

function createSelectOptions(data) {
  return data.map((value) => (
    <MenuItem key={value} value={value}>
      {value}
    </MenuItem>
  ));
}

function createMultipleCheckboxInput(
  data,
  name,
  values,
  handleChange,
  disabled,
) {
  return data.map((value) => (
    <FormControlLabel
      key={value}
      control={
        <Checkbox
          name={name}
          checked={values.includes(value)}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      }
      label={value}
    />
  ));
}

async function processImage(images) {
  // Upload the new images based on object URL.
  const newImages = images.filter((img) => img.url.startsWith('blob:'));
  const form = new FormData();

  if (newImages.length > 0) {
    newImages.forEach((img) => {
      form.append('images', img.file);
    });
  }

  const [uploadResult, uploadError] = await promiseResolver(
    imageAPI.upload(form),
  );

  if (uploadError || uploadResult.status === 'error') {
    throw new Error('Image upload error:', uploadError || uploadResult.message);
  }

  // Process the to-be-deleted images and delete it from the server.
  const toBeDeletedImages = images.filter(
    (img) =>
      img.url.startsWith('https:') && img.action && img.action === 'delete',
  );

  const deleteImagePromises = toBeDeletedImages.map((img) =>
    imageAPI.delete({ publicId: img.publicId }),
  );

  const [deleteResult, deleteError] = await promiseResolver(
    Promise.all(deleteImagePromises),
  );

  if (deleteError || deleteResult.status === 'error') {
    throw new Error('Image delete error:', deleteError || deleteResult.message);
  }

  // Then compile the list consisting of remaining old images and the newly
  // uploaded images.
  const remainingOldImage = images.filter(
    (img) => img.url.startsWith('https:') && !img.action,
  );
  const imageResult = [...remainingOldImage, ...uploadResult.data];

  return { imageResult, blobImages: newImages };
}

function cleanBlobImages(blobImages) {
  blobImages.forEach((img) => URL.revokeObjectURL(img.url));
}

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

const petFormHelpers = {
  createSelectOptions,
  createMultipleCheckboxInput,
  processImage,
  cleanBlobImages,
  createImagePreview,
};

export default petFormHelpers;
