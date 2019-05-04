import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextField from '../UI/forms/TextField';
import Select from '../UI/forms/Select';
import CheckboxGroup from '../UI/forms/CheckboxGroup';
import RadioButtonGroup from '../UI/forms/RadioButtonGroup';

const SampleSchema = Yup.object().shape({
  fullName: Yup.string().required('Please enter your name.'),
  email: Yup.string().email('Please enter a valid email address.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .required('Please enter a password.'),
  age: Yup.number()
    .required('Please enter your age.')
    .positive('Please enter a valid age.')
    .integer('Please enter a valid age.')
    .min(12, 'Age must be at least 12.')
    .max(120, 'Age must be lower than 120.')
});

const colorOptions = ['Red', 'Green', 'Blue', 'Yellow'];
const pronounOptions = ['he/him', 'she/her', 'they/them'];
const optinOptions = [
  { id: 'optedIn', label: 'yes', value: 'true' },
  { id: 'optedOut', label: 'no', value: 'false' }
];

export const SampleForm = ({ user, submitForm }) => (
  <Fragment>
    <h2>Current User Info:</h2>
    <ul className="returned-sample-state">
      {Object.keys(user).map(key => {
        let val = '';
        if (Array.isArray(user[key])) {
          val = user[key].join(', ');
        } else {
          val = user[key].toString();
        }

        return (
          <li key={key}>
            {key}: {val}
          </li>
        );
      })}
    </ul>

    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        age: '',
        preference: '',
        pronouns: ['they/them'],
        optin: 'false'
      }}
      validationSchema={SampleSchema}
      onSubmit={values => {
        submitForm(values);
      }}
      render={({ setFieldValue, setFieldTouched, values, errors, touched }) => (
        <Form>
          <TextField
            type="text"
            id="fullName"
            name="fullName"
            label="Name:"
            placeholder="Enter your name"
            required={true}
            errors={errors}
            touched={touched}
          />
          <TextField
            type="text"
            id="email"
            name="email"
            label="Email:"
            placeholder="Enter your email address"
            required={false}
            errors={errors}
            touched={touched}
          />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password:"
            placeholder="Enter your password"
            required={true}
            errors={errors}
            touched={touched}
          />
          <TextField
            type="number"
            id="age"
            name="age"
            label="Age:"
            placeholder="Enter your age"
            required={true}
            errors={errors}
            touched={touched}
          />
          <Select
            id="preference"
            name="preference"
            label="Color Preference:"
            placeholder="Select your preferred color"
            required={false}
            options={colorOptions}
            errors={errors}
            touched={touched}
          />
          <CheckboxGroup
            name="pronouns"
            label="Pronouns:"
            required={false}
            options={pronounOptions}
            errors={errors}
            touched={touched}
          />
          <RadioButtonGroup
            name="optin"
            label="Opt-in:"
            required={false}
            options={optinOptions}
            defaultValue={values.optin}
            errors={errors}
            touched={touched}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </Fragment>
);

SampleForm.propTypes = {
  user: PropTypes.object,
  submitForm: PropTypes.func.isRequired
};
