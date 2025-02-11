import React from 'react';
import { useSearchParams } from 'react-router';
import { Formik, Form } from 'formik';
import Stack from '@mui/material/Stack';

import ListControlFilter from './ListControlFilter.jsx';
import ListControlSort from './ListControlSort.jsx';

const defaultValues = {
  breed: '',
  age: '',
  gender: '',
  coatLength: '',
  preferHomeWith: [],
  preferHomeWithout: [],
  health: [],
  sort: '-createdAt',
};

function createInitialValues(defaultValuesParams, searchParams) {
  const parsedSearch = {};
  const valueKeys = Object.keys(defaultValuesParams);

  for (const [key, value] of searchParams.entries()) {
    // If search params belong to list control parameter, then include it to
    // the new object.
    if (valueKeys.includes(key)) {
      // If a search field contains multiple values, then turn it into array.
      if (Array.isArray(defaultValuesParams[key])) {
        parsedSearch[key] =
          parsedSearch[key] !== undefined
            ? parsedSearch[key].concat(value)
            : [value];

        continue;
      }

      parsedSearch[key] = value;
    }
  }

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

  const initialValues = createInitialValues(defaultValues, searchParams);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <Form>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
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
