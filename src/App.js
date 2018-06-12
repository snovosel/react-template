import React, { Component } from 'react';
import './App.scss';

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

class Button extends Component {
  render() {
    const { label, styleType } = this.props;

    return (
      <button className={`button ${styleType}`}>
        {label}
      </button>
    );
  }
}

Button.defaultProps = {
  styleType: '',
};

class InputText extends Component {
  render() {
    const { placeholder } = this.props;

    return (
      <input placeholder={placeholder} className="input-text" />
    );
  }
}

class InputTextArea extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <textarea className="text-area" placeholder={placeholder} />
    );
  }
}

export default App;
