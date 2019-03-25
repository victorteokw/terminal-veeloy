import React from 'react';
import { appMain } from './styles.scss';

const AppMain = ({ children }) => (
  <div className={appMain}>
    {children}
  </div>
);

export default AppMain;
