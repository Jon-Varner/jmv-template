import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SampleApiCall extends Component {
  componentDidMount() {
    this.props.userFetched();
  }

  render() {
    const user = this.props.user;
    let id = 0;
    let name = 'Unavailable';

    if (user.hasOwnProperty('id')) {
      id = user.id;
      name = user.name;
    }

    return (
      <p>
        API returned User ID: {id} and Name: {name}.
      </p>
    );
  }
}

SampleApiCall.propTypes = {
  user: PropTypes.object,
  userFetched: PropTypes.func.isRequired
};

export default SampleApiCall;
