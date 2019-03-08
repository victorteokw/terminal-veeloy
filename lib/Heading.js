import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heading extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  };

  render() {
    const defaultStyle = {
      color: '#ccc8c3',
      fontFamily: 'Lucida Grande, sans-serif',
      fontSize: '13px',
      userSelect: 'none'
    };
    const styles = { ...defaultStyle, ...this.props.styles || {}};
    return <div style={styles} className={this.props.className}>
      {this.props.children}
    </div>;
  }

}

export default Heading;
