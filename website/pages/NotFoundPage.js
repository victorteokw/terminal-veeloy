import React from 'react';
import useTitle from '../useTitle';
import Portal from '../components/Portal';
import BlackAndWhite from '../examples/BlackAndWhite';

const NotFoundPage = ({ setPath }) => {
  useTitle('404 Page Not Found');
  return <Portal>
    <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'Helvetica, Arial, sans-serif'
      }}>Page Not Found</h1>
      <div style={{
        textAlign: 'center',
        fontFamily: 'Helvetica, Arial, sans-serif'
      }}>
        <a style={{
          cursor: 'pointer'
        }} onClick={() => setPath('/')}>Introduction</a>
        <span> | </span>
        <a style={{
          cursor: 'pointer'
        }} onClick={() => setPath('/examples/dark-title-bar')}>Examples</a>
        <span> | </span>
        <a>Documentation</a>
      </div>
      <div style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {BlackAndWhite}
      </div>
    </div>
  </Portal>;
};

export default NotFoundPage;
