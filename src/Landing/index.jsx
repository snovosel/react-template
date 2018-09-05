import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

// const mapStateToProps = state = ({
//   count: state.get('count'),
// });

// const mapStateToProps = (state) => {
//   console.log('state count', state);
//   return {
//     count: state.count,
//   }
// }

// const mapStateToProps = ({state}) => ({
//   state.count
// });

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

// const LandingRedux = connect(mapStateToProps, null)(Landing);

export default connect(mapStateToProps, null)(Landing);

// export default connect(mapStateToProps, null)(Landing);
