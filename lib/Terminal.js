import React, { Component } from 'react';

class Terminal extends Component {

  render() {
    return <div>
      Terminal
      {this.props.children}
    </div>;
  }

}

export default Terminal;
