import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
