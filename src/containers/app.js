import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts('news', {
      test1: 'test1',
      test2: 'test2',
      test3: 'test3'
    });
  }

  render() {
    return (
      <div>
        {
          this.props.posts.map(post => <p key={post.data.id}>{post.data.title}</p>)
        }
      </div>
    )
  }
};

const mapStateToProps = ({ posts, subredditName }) => ({ posts, subredditName });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);