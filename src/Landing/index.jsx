import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCount } from './ducks.js';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({
  landing: {
    count,
  }
}) => ({
  count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCount,
    },
    dispatch
  );

export class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addCount();
  }

  render() {
    return (
      <div>
        <Link to="/components">Components</Link>
        <br />
        <h3>Redux</h3>
        <p>{this.props.count}</p>
        <button onClick={this.handleClick}>Add Count</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
