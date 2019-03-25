import React from 'react';
import PropTypes from 'prop-types';
import { navItem, highlight } from './styles.scss';

const NavItem = ({ selected, onClick, children }) => {

  return <a
    className={navItem + (selected ? ` ${highlight}` : '')}
    onClick={onClick}
  >
    {children}
  </a>;
};

NavItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

NavItem.defaultProps = {
  selected: false
};

export default NavItem;
