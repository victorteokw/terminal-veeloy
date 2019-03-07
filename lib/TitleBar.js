import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return <div>
      Title is: {this.props.title}
    </div>;
  }

}

export default TitleBar;
