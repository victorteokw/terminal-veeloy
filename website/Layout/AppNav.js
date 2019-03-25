import React from 'react';
import { appNav } from './styles.scss';

const AppNav = ({ children }) => (
  <div className={appNav}>
    {children}
  </div>
);

export default AppNav;
