import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestApiCall extends Component {
  componentDidMount() {
    /* 
    NOTE: API calls will not work from localhost

    this.props.userFetched(); 
    */
  }

  render() {
    return (
      <p>
        API returned User ID: {this.props.user.id} and Name:{' '}
        {this.props.user.name}.
      </p>
    );
  }
}

TestApiCall.propTypes = {
  user: PropTypes.object,
  userFetched: PropTypes.func.isRequired
};

export default TestApiCall;
