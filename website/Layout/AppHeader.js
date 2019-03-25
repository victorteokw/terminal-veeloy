import React from 'react';
import logo from './logo.svg';
import github from './github.svg';
import { appHeader, githubLink } from './styles.scss';

const AppHeader = () => {
  return <div className={appHeader}>
    <img src={logo} />
    <a href="https://github.com/zhangkaiyulw/terminal-veeloy" target="_blank">
      <img src={github} className={githubLink} />
    </a>
  </div>;
};

export default AppHeader;
