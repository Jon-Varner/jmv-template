import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Aux from '../../hoc/Auxiliary';

const testForm = props => (
  <Aux>
    <p>{props.testData}</p>
    <input
      value={props.testData}
      id={uuid.v4()}
      onChange={e => props.dispatchedTest(e.target.value)}
    />
  </Aux>
);

testForm.propTypes = {
  testData: PropTypes.string,
  dispatchedTest: PropTypes.func.isRequired
};

export default testForm;
