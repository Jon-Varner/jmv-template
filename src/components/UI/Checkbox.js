import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Checkbox = React.memo(props => (
  <Field name={props.name}>
    {({ field, form }) => (
      <Fragment>
        <input
          type="checkbox"
          {...props}
          checked={field.value.includes(props.value)}
          onChange={() => {
            if (field.value.includes(props.value)) {
              const nextValue = field.value.filter(
                value => value !== props.value
              );
              form.setFieldValue(props.name, nextValue);
            } else {
              const nextValue = field.value.concat(props.value);
              form.setFieldValue(props.name, nextValue);
            }
          }}
        />
        <label>{props.value}</label>
      </Fragment>
    )}
  </Field>
));

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default Checkbox;
