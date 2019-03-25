import React from 'react';
import { appBody } from './styles.scss';

const AppBody = ({ children }) => (
  <div className={appBody}>
    {children}
  </div>
);

export default AppBody;
