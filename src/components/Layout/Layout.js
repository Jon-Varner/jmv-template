import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import { SampleForm } from '../SampleForm/SampleForm';
import SampleApiCall from '../SampleApiCall/SampleApiCall';
import Error404 from '../Error/Error404';

import * as actions from '../../store/actions/actions';

const Layout = React.memo(
  ({ menuOpen, person, user, toggleMenu, fetchPerson, addUser }) => {
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
        <Header title="Custom React template" />
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
                <SampleApiCall
                  person={person}
                  personFetched={onPersonFetched}
                />
              )}
            />
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }
);

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
