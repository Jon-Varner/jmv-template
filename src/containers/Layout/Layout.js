import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

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
  person,
  user,
  toggleMenu,
  fetchPerson,
  addUser
}) => {
  const onFormSubmitted = data => {
    addUser(data);
  };

  const onPersonFetched = () => {
    fetchPerson();
  };

  const onMenuToggled = () => {
    toggleMenu();
  };

  return (
    <Fragment>
      <Header />
      <Nav menuOpen={menuOpen} toggleMenu={onMenuToggled} />
      <main>
        <Switch>
          <Route
            exact
            path="/sample-form"
            render={() => (
              <SampleForm user={user} submitForm={onFormSubmitted} />
            )}
          />
          <Route
            exact
            path="/sample-api-call"
            render={() => (
              <SampleApiCall person={person} personFetched={onPersonFetched} />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    menuOpen: state.menuToggle.menuOpen,
    person: state.sampleApiCall.person,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
    fetchPerson: () => dispatch(actions.fetchPerson()),
    addUser: payload => dispatch(actions.addUser(payload))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
