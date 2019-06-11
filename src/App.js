import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import { SampleForm } from './components/SampleForm/SampleForm';
import SampleApiCall from './components/SampleApiCall/SampleApiCall';
import Error404 from './components/Error/Error404';

import { toggleMenu, addUser, fetchPersonBegin } from './store/actions/actions';

const App = ({ menuOpen, person, user, toggleMenu, fetchPerson, addUser }) => {
  const submitForm = data => {
    addUser(data);
  };

  return (
    <Fragment>
      <Header title="Custom React template" />
      <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        <Switch>
          <Route
            exact
            path="/sample-form"
            render={() => <SampleForm user={user} submitForm={submitForm} />}
          />
          <Route
            exact
            path="/sample-api-call"
            render={() => (
              <SampleApiCall person={person} fetchPerson={fetchPerson} />
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
    toggleMenu: () => dispatch(toggleMenu()),
    fetchPerson: () => dispatch(fetchPersonBegin()),
    addUser: payload => dispatch(addUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
