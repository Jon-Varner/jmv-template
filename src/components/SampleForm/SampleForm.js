import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormField from '../UI/FormField';
import { fields, validationSchema } from './SampleFormData';

const SampleForm = ({ user, submitForm }) => {
  /* Local state is used to handle form values and validation before submitting */
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    event.persist();
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const handleBlur = event => {
    /* Real-time validation could go here */
  };

  const handleSubmit = event => {
    event.preventDefault();

    /* Validation */
    validationSchema
      .validate(inputs, { abortEarly: false })
      .then(values => {
        for (let field of fields) {
          field.errorMessage = '';
        }
        submitForm(values);
      })
      .catch(err => {
        for (let field of fields) {
          field.errorMessage = '';
          for (let error of err.inner) {
            if (field.name === error.path) {
              field.errorMessage = error.message;
              console.log(field.errorMessage);
            }
          }
        }
        setErrors(err.inner);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Current User Info:</h2>
      <ul className="returned-sample-state">
        {Object.keys(user).map(key => (
          <li key={key}>
            {key}: {user[key].toString()}
          </li>
        ))}
      </ul>
      {fields.map(field => {
        const {
          name,
          id,
          type,
          label,
          required,
          errorMessage,
          placeholder,
          options,
          className
        } = field;

        const fieldId = id + name;

        return (
          <FormField
            key={id}
            name={name}
            id={fieldId}
            type={type}
            label={label}
            required={required}
            errorMessage={errorMessage}
            placeholder={placeholder}
            options={options}
            className={className}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

SampleForm.propTypes = {
  user: PropTypes.object,
  submitForm: PropTypes.func.isRequired
};

export default SampleForm;
