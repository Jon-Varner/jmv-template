import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import uuid from 'uuid';

const RadioButtonGroup = ({
  name,
  label,
  required,
  options,
  defaultValue,
  errors,
  touched
}) => (
  <div className="form-field">
    <h2>
      {label} {required ? <span className="required">*</span> : null}
    </h2>
    <Field component="ul" name={name}>
      {options.map(option => (
        <li key={uuid.v4()}>
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            defaultChecked={defaultValue === option.value}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </li>
      ))}
    </Field>
    {errors[name] && touched[name] ? (
      <span className="form-field-error">{errors[name]}</span>
    ) : null}
  </div>
);

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default RadioButtonGroup;
