import React from 'react';
import logo from './logo.svg';
import github from './github.svg';

const Header = () => {
  return <div style={{
    height: '54px',
    padding: '12px 12px 12px 0',
    borderBottom: '1px dashed #dddddd',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
  }}>
    <img src={logo} />
    <style>
      .github-link {'{'}
        opacity: 0.15;
        cursor: pointer;
        transition: opacity .25s ease-in-out;
      {'}'}
      .github-link:hover {'{'} opacity: 1; {'}'}
    </style>
    <a href="https://github.com/zhangkaiyulw/terminal-veeloy" target="_blank">
      <img src={github} className='github-link' />
    </a>
  </div>;
};

export default Header;
