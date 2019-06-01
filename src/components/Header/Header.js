import React from 'react';

const Header = React.memo(({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
));

export default Header;
