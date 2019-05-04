import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Field } from 'formik';

const Select = ({
  id,
  name,
  label,
  placeholder,
  required,
  options,
  errors,
  touched
}) => (
  <div className="form-field">
    <label htmlFor={id}>
      {label} {required ? <span className="required">*</span> : null}
    </label>
    <Field component="select" id={id} name={name}>
      <option value="0">{placeholder}</option>
      {options.map(option => (
        <option key={uuid.v4()} value={option}>
          {option}
        </option>
      ))}
    </Field>
    {errors[name] && touched[name] ? (
      <span className="form-field-error">{errors[name]}</span>
    ) : null}
  </div>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default Select;
