import React from 'react';

const Footer = React.memo(props => (
  <footer>
    <ul>
      <li>&copy; copyright info</li>
    </ul>
    <ul>
      <li>Contact info</li>
      <li>More contact info</li>
    </ul>
  </footer>
));

export default Footer;
