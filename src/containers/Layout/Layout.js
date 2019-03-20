import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Home from '../../components/Home/Home';
import SampleForm from '../../components/SampleForm/SampleForm';
import SampleApiCall from '../../components/SampleApiCall/SampleApiCall';
import Error404 from '../../components/Error/Error404';

import * as actions from '../../store/actions/actions';

export class Layout extends Component {
  onSampleDispatched = data => {
    this.props.sampleDispatch(data);
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
              path="/sample-form"
              render={() => (
                <SampleForm
                  sampleData={this.props.sampleData}
                  dispatchedSample={this.onSampleDispatched}
                />
              )}
            />
            <Route
              exact
              path="/sample-api-call"
              render={() => (
                <SampleApiCall
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
    sampleData: state.sampleDispatch.sampleData,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sampleDispatch: data => dispatch(actions.sampleDispatch(data)),
    fetchUser: () => dispatch(actions.fetchUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
