import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SampleApiCall = props => {
  const user = props.user;
  let id = 0;
  let name = 'Unavailable';

  if (user && user.id && user.name) {
    id = user.id;
    name = user.name;
  }

  useEffect(() => {
    props.userFetched();
  }, []);

  return (
    <p className="api-result">
      API returned User ID: {id} and Name: {name}.
    </p>
  );
};

SampleApiCall.propTypes = {
  user: PropTypes.object,
  userFetched: PropTypes.func.isRequired
};

export default SampleApiCall;
