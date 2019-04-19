import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import FormField from '../UI/FormField';

const SampleForm = ({ sampleData, dispatchedSample }) => (
  <Fragment>
    <p className="returned-sample-state">{sampleData}</p>
    <FormField
      type="text"
      label="Change this text:"
      className="sample-dispatch"
      placeholder="update me!"
      id={uuid.v4()}
      onChange={e => dispatchedSample(e.target.value)}
    />
  </Fragment>
);

SampleForm.propTypes = {
  sampleData: PropTypes.string,
  dispatchedSample: PropTypes.func.isRequired
};

export default SampleForm;
