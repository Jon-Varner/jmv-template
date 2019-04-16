import React from 'react';
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

const Layout = ({
  menuOpen,
  sampleData,
  user,
  toggleMenu,
  sampleDispatch,
  fetchUser
}) => {
  const onSampleDispatched = data => {
    sampleDispatch(data);
  };

  const onUserFetched = () => {
    fetchUser();
  };

  const onMenuToggled = () => {
    toggleMenu();
  };

  return (
    <Aux>
      <Header />
      <Nav menuOpen={menuOpen} toggleMenu={onMenuToggled} />
      <main>
        <Switch>
          <Route
            exact
            path="/sample-form"
            render={() => (
              <SampleForm
                sampleData={sampleData}
                dispatchedSample={onSampleDispatched}
              />
            )}
          />
          <Route
            exact
            path="/sample-api-call"
            render={() => (
              <SampleApiCall user={user} userFetched={onUserFetched} />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer />
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    menuOpen: state.menuToggle.menuOpen,
    sampleData: state.sampleDispatch.sampleData,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
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
