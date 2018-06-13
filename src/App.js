import React, { Component } from 'react';
import Button from './components/Button/index.jsx';
import InputText from './components/InputText/index.jsx';
import InputTextArea from './components/InputTextArea/index.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h4>Buttons</h4>
        <Button label="check" styleType="wire" />
        <Button label="mate" styleType="wire" />
        <Button label="mate" styleType="primary" />
        <Button label="possible" styleType="secondary" />
        <br />
        <h4>Input Text</h4>
        <InputText placeholder="Enter this here..." />
        <br />
        <h4>Input Text Area </h4>
        <InputTextArea placeholder="Enter text in this text area box..." />
      </div>
    );
  }
}

export default App;
