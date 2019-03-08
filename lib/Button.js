import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    close: PropTypes.bool,
    maximize: PropTypes.bool,
    minimize: PropTypes.bool,
    disabled: PropTypes.bool
  };

  render() {
    const backgroundColor = () => {
      if (this.props.disabled) return '#d0d0d0';
      if (this.props.close) return '#ff5a52';
      if (this.props.minimize) return '#e5c02a';
      if (this.props.maximize) return '#28ce42';
      return '#d0d0d0';
    };
    const defaultStyle = {
      width: '12px',
      height: '12px',
      borderRadius: '6px',
      overflow: 'hidden',
      backgroundColor: backgroundColor()
    };
    const styles = { ...defaultStyle, ...this.props.styles || {}};
    return <div style={styles} className={this.props.className}>
      {this.props.children}
    </div>;
  }

}

export default Button;
