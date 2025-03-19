import petQueries from './graphql/queries.js';
import petMutations from './graphql/mutations.js';
import petFormHelpers from './utils/pet-form-helpers.jsx';
import demoUploadImages from './utils/demo-upload-images.js';

const petFeatures = {
  graphql: {
    queries: petQueries,
    mutations: petMutations,
  },
  utils: {
    petFormHelpers,
    demoUploadImages,
  },
};

export default petFeatures;
