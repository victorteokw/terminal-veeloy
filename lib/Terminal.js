import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Terminal extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  };

  render() {
    const defaultStyle = {
      width: '571px',
      height: '390px',
      position: 'relative',
      backgroundColor: 'black',
      border: '1px solid #868584',
      color: 'white',
      fontFamily: 'Menlo, monospace',
      borderRadius: '6px',
      overflow: 'hidden',
      boxShadow: '0px 20px 80px 0px rgba(0,0,0,0.75)'
    };
    const styles = { ...defaultStyle, ...this.props.styles || {}};
    return <div style={styles} className={this.props.className}>
      {this.props.children}
    </div>;
  }

}

export default Terminal;
