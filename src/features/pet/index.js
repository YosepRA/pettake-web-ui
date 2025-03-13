import petQueries from './graphql/queries.js';
import petFormHelpers from './utils/pet-form-helpers.jsx';
import uploadImages from './utils/upload-images.js';

const petFeatures = {
  graphql: {
    queries: petQueries,
  },
  utils: {
    petFormHelpers,
    uploadImages,
  },
};

export default petFeatures;
