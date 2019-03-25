import React from 'react';
import { navItemSpacer } from './styles.scss';

const NavItemSpacer = ({ children }) => (
  <div className={navItemSpacer}>
    {children}
  </div>
);

export default NavItemSpacer;
