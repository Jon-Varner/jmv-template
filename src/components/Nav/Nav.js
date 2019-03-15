import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = props => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/test-form">
          Test Form
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/test-api-call">
          Test API Call
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default nav;
