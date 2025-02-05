import React, { useState } from 'react';
import { useSearchParams } from 'react-router';
import { Formik, Form } from 'formik';
import Stack from '@mui/material/Stack';

import ListControlFilter from './ListControlFilter.jsx';
import ListControlSort from './ListControlSort.jsx';

const initialValues = {
  breed: '',
  age: '',
  gender: '',
  coatLength: '',
  preferHomeWith: [],
  preferHomeWithout: [],
  health: [],
  sort: '',
};

const ListControl = function ListControlComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <Form>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <ListControlFilter
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <ListControlSort values={values} handleSubmit={handleSubmit} />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ListControl;
