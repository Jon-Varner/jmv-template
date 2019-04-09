import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import MenuToggle from './MenuToggle';

const nav = ({ menuOpen, toggleMenu }) => (
  <nav className={menuOpen ? 'primary-nav is-open' : 'primary-nav'}>
    <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/sample-form">
          Sample Form
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/sample-api-call">
          Sample API Call
        </NavLink>
      </li>
    </ul>
  </nav>
);

nav.propTypes = {
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default nav;
