import React from 'react';
import { appNav } from './styles.scss';
import usePath from 'react-use-path';

const AppNav = ({ children }) => {
  const [path, setPath] = usePath();
  return <div className={appNav}>
    {children}
    {path.fullpath}
  </div>;
};

export default AppNav;
