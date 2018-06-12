import React, { Component } from 'react';

class InputText extends Component {
  render() {
    const { placeholder } = this.props;

    return (
      <input placeholder={placeholder} className="input-text" />
    );
  }
}
