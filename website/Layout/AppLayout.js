import React from 'react';
import { appLayout } from './styles.scss';

const AppLayout = ({ children }) => (
  <div className={appLayout}>
    {children}
  </div>
);

export default AppLayout;
