import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Checkbox from './Checkbox';

const CheckboxGroup = ({ name, label, required, options, errors, touched }) => (
  <div className="form-field">
    <h2>
      {label} {required ? <span className="required">*</span> : null}
    </h2>
    <ul>
      {options.map(option => (
        <li key={uuid.v4()}>
          <Checkbox id={option} name={name} value={option} />
        </li>
      ))}
    </ul>
    {errors[name] && touched[name] ? (
      <span className="form-field-error">{errors[name]}</span>
    ) : null}
  </div>
);

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default CheckboxGroup;
