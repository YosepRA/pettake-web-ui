// Upload pet images and return the upload data.
function uploadImages(fileList) {
  // Integrate with image upload service later...
  const result = [];

  for (const file of fileList) {
    const uniquePrefix = Math.random().toString(16).slice(2);
    const imageData = {
      publicId: `PetTake/${uniquePrefix}-${file.name}`,
      url: `https://www.picturelink.com/${uniquePrefix}-${file.name}`,
    };

    result.push(imageData);
  }

  return result;
}

export default uploadImages;
