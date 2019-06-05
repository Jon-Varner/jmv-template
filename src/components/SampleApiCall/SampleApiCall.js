import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SampleApiCall extends Component {
  componentDidMount() {
    this.props.fetchPerson();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.person !== this.props.person) {
      return true;
    }
    return false;
  }

  render() {
    const {
      person: { id, name }
    } = this.props;

    return (
      <p className="api-result">
        API returned Person ID: {id} and Name: {name}.
      </p>
    );
  }
}

SampleApiCall.propTypes = {
  person: PropTypes.object,
  fetchPerson: PropTypes.func.isRequired
};

export default SampleApiCall;
