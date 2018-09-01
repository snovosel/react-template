import React from 'react';
// import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom'

export const Landing = () => (
  <div>
    <p>Landing</p>
    <Link to="/components">Components</Link>
    <br />
    <Link to="/about" >About</Link>
  </div>
);
