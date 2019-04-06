import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuToggle from './MenuToggle';

const nav = props => (
  <nav className={props.menuOpen ? 'is-open' : ''}>
    <MenuToggle menuOpen={props.menuOpen} toggleMenu={props.toggleMenu} />
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

export default nav;
