import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const SampleForm = ({ sampleData, dispatchedSample }) => (
  <Fragment>
    <p className="returned-sample-state">{sampleData}</p>
    <input
      className="sample-dispatch"
      value={sampleData}
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
