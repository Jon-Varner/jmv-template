import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestApiCall extends Component {
  componentDidMount() {
    /* 
    NOTE: API calls will not work from localhost
    */
    this.props.userFetched();
  }

  render() {
    const user = this.props.user;
    let id = 0;
    let name = 'Unavailable';

    if (user.hasOwnProperty(id)) {
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

TestApiCall.propTypes = {
  user: PropTypes.object,
  userFetched: PropTypes.func.isRequired
};

export default TestApiCall;
