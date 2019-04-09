import React from 'react';
import PropTypes from 'prop-types';

const menuToggle = ({ menuOpen, toggleMenu }) => (
  <button
    className="menu-toggle"
    aria-label="Open the menu"
    onClick={toggleMenu}
  >
    <span className="menu-hamburger" aria-hidden="true" />
    <span className="menu-hamburger" aria-hidden="true" />
    <span className="menu-hamburger" aria-hidden="true" />
  </button>
);

menuToggle.propTypes = {
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default menuToggle;
