import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map(post => <p>{post}</p>)
        }
      </div>
    )
  }
};

const mapStateToProps = ({ lists, subredditName }) => ({ list: lists[subredditName] });

export default connect(mapStateToProps)(App);