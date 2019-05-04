import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Checkbox = ({ id, name, value, ...props }) => (
  <Field name={name}>
    {({ field, form }) => (
      <Fragment>
        <input
          id={id}
          type="checkbox"
          {...props}
          checked={field.value.includes(value)}
          onChange={() => {
            if (field.value.includes(value)) {
              const nextValue = field.value.filter(v => v !== value);
              form.setFieldValue(name, nextValue);
            } else {
              const nextValue = field.value.concat(value);
              form.setFieldValue(name, nextValue);
            }
          }}
        />
        <label>{value}</label>
      </Fragment>
    )}
  </Field>
);

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default Checkbox;
