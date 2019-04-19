import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import MenuToggle from '../UI/MenuToggle';

const Nav = ({ menuOpen, toggleMenu }) => (
  <nav className={menuOpen ? 'primary-nav is-open' : 'primary-nav'}>
    <MenuToggle toggleMenu={toggleMenu} />
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

Nav.propTypes = {
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default Nav;
