import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts('news');
  }

  render() {
    return (
      <div className='container'>
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