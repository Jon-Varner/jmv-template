import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Aux from '../../hoc/Auxiliary';

const sampleForm = ({ sampleData, dispatchedSample }) => (
  <Aux>
    <p className="returned-sample-state">{sampleData}</p>
    <input
      className="sample-dispatch"
      value={sampleData}
      id={uuid.v4()}
      onChange={e => dispatchedSample(e.target.value)}
    />
  </Aux>
);

sampleForm.propTypes = {
  sampleData: PropTypes.string,
  dispatchedSample: PropTypes.func.isRequired
};

export default sampleForm;
