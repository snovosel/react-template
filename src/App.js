import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Button from './components/Button/index.jsx';
import InputText from './components/InputText/index.jsx';
import InputTextArea from './components/InputTextArea/index.jsx';
import InputCheckBox from './components/InputCheckBox/index.jsx';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div styleName="app-container">
        <h4>Buttons</h4>
        <Button label="check" styleType="wire" />
        <Button label="mate" styleType="wire" />
        <Button label="mate" styleType="primary" />
        <Button label="possible" styleType="secondary" />
        <Button label="dryice" styleType="tertiary" />
        <br />
        <h4>Input Text</h4>
        <InputText placeholder="Enter this here..." />
        <br />
        <h4>Input Text Area </h4>
        <InputTextArea placeholder="Enter text in this text area box..." />
        <h4>Check boxes </h4>
        <InputCheckBox />
      </div>
    );
  }
}

export default CSSModules(App, styles);
