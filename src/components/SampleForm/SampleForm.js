import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import uuid from 'uuid';

import Checkbox from '../UI/Checkbox';

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
        console.log(values);
        submitForm(values);
      }}
      render={({ setFieldValue, setFieldTouched, values, errors, touched }) => (
        <Form>
          <div className="form-field">
            <label htmlFor="fullName">
              Name:<span className="required">*</span>
            </label>
            <Field
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
            />
            {errors.fullName && touched.fullName ? (
              <span className="form-field-error">{errors.fullName}</span>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address:</label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && touched.email ? (
              <span className="form-field-error">{errors.email}</span>
            ) : null}
          </div>
          <div className="form-field" placeholder="Enter your password">
            <label htmlFor="password">
              Password:<span className="required">*</span>
            </label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <span className="form-field-error">{errors.password}</span>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="age">
              Age:<span className="required">*</span>
            </label>
            <Field name="age" type="number" placeholder="Enter your age" />
            {errors.age && touched.age ? (
              <span className="form-field-error">{errors.age}</span>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="preference">Preference:</label>
            <Field component="select" name="preference">
              <option value="0">Select your preferred color</option>
              {colorOptions.map(option => (
                <option key={uuid.v4()} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>
          <div className="form-field">
            <h2>Pronouns:</h2>
            <ul>
              {pronounOptions.map(option => (
                <li key={uuid.v4()}>
                  <Checkbox id={option} name="pronouns" value={option} />
                </li>
              ))}
            </ul>
          </div>
          <div className="form-field">
            <h2>Opt-in:</h2>
            <Field component="ul" name="optin">
              <li>
                <input
                  type="radio"
                  id="optedIn"
                  name="optin"
                  value="true"
                  defaultChecked={values.optin === 'true'}
                />
                <label htmlFor="optedIn">Yes</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="optedOut"
                  name="optin"
                  value="false"
                  defaultChecked={values.optin === 'false'}
                />
                <label htmlFor="optedOut">No</label>
              </li>
            </Field>
          </div>
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
