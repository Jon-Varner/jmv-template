import React from 'react';
import PropTypes from 'prop-types';

const MenuToggle = ({ toggleMenu }) => (
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

MenuToggle.propTypes = {
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default MenuToggle;
