import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SampleApiCall = ({ person, personFetched }) => {
  let id = 0;
  let name = 'Unavailable';

  if (person && person.id && person.name) {
    id = person.id;
    name = person.name;
  }

  useEffect(() => {
    personFetched();
  }, [personFetched]);

  return (
    <p className="api-result">
      API returned person ID: {id} and Name: {name}.
    </p>
  );
};

SampleApiCall.propTypes = {
  person: PropTypes.object,
  personFetched: PropTypes.func.isRequired
};

export default SampleApiCall;
