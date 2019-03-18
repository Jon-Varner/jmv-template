import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Aux from '../../hoc/Auxiliary';

const sampleForm = props => (
  <Aux>
    <p className="displayStateData">{props.sampleData}</p>
    <input
      value={props.sampleData}
      id={uuid.v4()}
      onChange={e => props.dispatchedSample(e.target.value)}
    />
  </Aux>
);

sampleForm.propTypes = {
  sampleData: PropTypes.string,
  dispatchedSample: PropTypes.func.isRequired
};

export default sampleForm;
