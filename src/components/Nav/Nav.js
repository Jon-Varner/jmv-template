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
