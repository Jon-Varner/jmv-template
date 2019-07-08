import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const TextField = forwardRef(
  ({ id, name, type, label, placeholder, required, errors, touched }, ref) => (
    <div className="form-field">
      <label htmlFor={id}>
        {label} {required ? <span className="required">*</span> : null}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        innerRef={ref}
      />
      {errors[name] && touched[name] ? (
        <span className="form-field-error">{errors[name]}</span>
      ) : null}
    </div>
  )
);

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default TextField;
