import React, { Component, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import styles from './SignInForm.module.scss';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';

const initialState = {
  email: '',
  password: '',
};

function SignInForm(props) {
  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={submitHandler}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={styles.container}>
            <Field name="email" placeholder="email" />
            <ErrorMessage
              name="email"
              children={(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            />
            <Field type="text" name="password" placeholder="password" />
            <ErrorMessage name="password"  component='article'/>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
