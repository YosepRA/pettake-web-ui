import React from 'react';
import { useSearchParams } from 'react-router';
import { Formik, Form } from 'formik';
import Stack from '@mui/material/Stack';

import { listControlDefaultValues } from '@Data/index.js';
import { parseListFiltersSearch } from '@Utils/index.js';

import ListControlFilter from './ListControlFilter.jsx';
import ListControlSort from './ListControlSort.jsx';

function createInitialValues(defaultValuesParams, searchParams) {
  const parsedSearch = parseListFiltersSearch(
    defaultValuesParams,
    searchParams,
  );

  const initialValues = { ...defaultValuesParams, ...parsedSearch };

  return initialValues;
}

const ListControl = function ListControlComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = (values) => {
    // Start with the first page.
    const search = { page: 1 };

    Object.keys(values).forEach((key) => {
      const value = values[key];

      if (!value || (Array.isArray(value) && value.length < 1))
        return undefined;

      search[key] = value;
    });

    setSearchParams(search);
  };

  const initialValues = createInitialValues(
    listControlDefaultValues,
    searchParams,
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <Form>
          <Stack direction="row" spacing={1}>
            <ListControlFilter
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <ListControlSort
              values={values}
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
            />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ListControl;
