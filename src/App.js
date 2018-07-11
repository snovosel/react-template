import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Button from './components/Inputs/Button/index.jsx';
import InputText from './components/Inputs/InputText/index.jsx';
import InputTextArea from './components/Inputs/InputTextArea/index.jsx';
import InputCheckBox from './components/Inputs/InputCheckBox/index.jsx';
import Card from './components/Blocks/Card/index.jsx';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div styleName="app-container">
        <h1>Inputs</h1>
        <h4>Buttons</h4>
        <Button label="check" styleType="wire" />
        <Button label="mate" styleType="wire" />
        <Button label="seconday" styleType="secondary" />
        <Button label="primary" styleType="primary" />
        <Button label="warning" styleType="tertiary" />
        <br />
        <h4>Input Text</h4>
        <InputText placeholder="Enter this here..." />
        <br />
        <h4>Input Text Area </h4>
        <InputTextArea placeholder="Enter text in this text area box..." />
        <h4>Check boxes </h4>
        <InputCheckBox />
        <br />
        <h1>Layouts</h1>
        <br />
        <h4>Card</h4>
        <section styleName="card-showcase">
          <div>
            <h6>Card Regular</h6>
            <Card />
          </div>
          <div>
            <h6>Card Tall</h6>
            <Card styleType="tall" />
          </div>
          <div>
            <h6>Card Wide</h6>
            <Card styleType="wide" />
          </div>
        </section>
        <br />
      </div>
    );
  }
}

export default CSSModules(App, styles);
