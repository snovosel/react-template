import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = ({
  landing: {
    count
  }
}) => ({
  count
})

export class Landing extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <p>Landing</p>
        <Link to="/components">Components</Link>
        <br />
        <Link to="/about" >About</Link>
        <br />
        <p>{this.props.count}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Landing);
