import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom';

import { Landing } from './components/Landing/index.jsx';
import ComponentLibrary from './components';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/components" component={ComponentLibrary} />
        <Route path="/about" render={() => (
          <p>About</p>
        )} />
      </Switch>
    );
  }
}

export default CSSModules(App, styles);
