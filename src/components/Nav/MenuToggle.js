import React from 'react';

const menuToggle = props => (
  <button
    className={props.menuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
    aria-label="Open the menu"
    onClick={props.toggleMenu}
  >
    <span className="menu-hamburger" aria-hidden="true" />
    <span className="menu-hamburger" aria-hidden="true" />
    <span className="menu-hamburger" aria-hidden="true" />
  </button>
);

export default menuToggle;
