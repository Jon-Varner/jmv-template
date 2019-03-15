import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Home from '../../components/Home/Home';
import TestForm from '../../components/TestForm/TestForm';
import TestApiCall from '../../components/TestApiCall/TestApiCall';
import Error404 from '../../components/Error/Error404';

import * as actions from '../../store/actions/actions';

class Layout extends Component {
  onTestDispatched = data => {
    this.props.testDispatch(data);
  };

  onUserFetched = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <Aux>
        <Header />
        <Nav />
        <main>
          <Switch>
            <Route
              exact
              path="/test-form"
              render={props => (
                <TestForm
                  testData={this.props.testData}
                  dispatchedTest={this.onTestDispatched}
                />
              )}
            />
            <Route
              exact
              path="/test-api-call"
              render={props => (
                <TestApiCall
                  user={this.props.user}
                  userFetched={this.onUserFetched}
                />
              )}
            />
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    testData: state.testDispatch.testData,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testDispatch: data => dispatch(actions.testDispatch(data)),
    fetchUser: () => dispatch(actions.fetchUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
