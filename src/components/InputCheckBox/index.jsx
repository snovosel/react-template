import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class InputCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="slider" />
        <div styleName="knob" />
        <input type="checkbox"  styleName="box"/>
      </div>
    );
  }

}

const InputCheckBoxStyled = CSSModules(InputCheckBox, styles, {
  allowMultiple: true,
});

export default InputCheckBoxStyled;
