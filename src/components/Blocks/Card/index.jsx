import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class Card extends Component {

  render() {
    return (
      <div styleName="card-container"></div>
    );
  }

}

const CardStyled = CSSModules(Card, styles, {
  allowMultiple: true,
});

export default CardStyled;
